import { readdir, readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'

const sourceRoot = new URL('../src/', import.meta.url)

const forbiddenTokenHashes = [
  '4555a94832c0af847c0d295e7e7b95663b3c9347430ec2d3ecbf5f888f847a5e',
  '2023bb247b5e7154a872a877de417189d5c2f61651ca258a94195744b5f3c9c0',
  '8720a0def69b4b113d5a4c66a0c33ef4cf43b5793b473c7a178c188c63fa88d8',
  'f86b6bae50059f1790bc120577b1ce42febd16761a5ba0123dd6413658a601e5',
  'a9d1e780687ac78d0eff2fc993037b1dd95440913ae402eb2acb488ee9eb6c03',
  'd2c39ab9a8c5a2dfe6708f1a74112183b7d27eeb6084ee3e858c36b0335cf2b8',
  '7fa8a31cb51ad946d075cb9150c37cd80b8d161cba8f9e3243fca37ba0bda5f7',
  '82cdd48296bb226716adfea1a0792c09d3393fc7d6009b9c0080dc04727251b5',
  '8c157bd42b63fc6c158810e089dd407126398dc99be79b3a6ccccd5dad7af7c3',
  'b2e0454d270265b09830922ca4fe5d13c7b83eb35d42598006958d905c63e0b7',
  '0b250e09e48b5017c486a465822611a1b31bd83f47ebfa4e05c61008f095c915',
  '96bcc0fcc702f970bda74c2540c7ef8cdb7a891d063b2ed5b5a18615a518f0ba',
  'ba474375be77857f0e4eebea11f6a2d769c6487e4a19d41b0025a3ed21e9c2ad',
  '6d13bf33b8202939f8e161340750920862c21d7ce875440d86742edd4a8bcf5c',
  'ff28f102cb4d7835ecdcfb6faff2cb8b0641373252aab47cc390d965afc58644',
  '563a278902fa76bae3ec1833f24ff89abe26329b1d32af9aaa924d6fc6fd68aa',
  '333dcaaf596706b45bb6d2f463a12db2e590bc8fe242d528692c9e7d9b68d67b',
  '8287e179626b452d7a3921737169231ab3fc353560cd880b03d9823e33495159',
  '64cd3b34d8c7621f0a90185f97f0c6410b86a630627910dc3803215b54c719d2',
]

const requiredTerms = [
  'Confidential Game Technology R&D',
  'Confidential Multiplayer Technology Demo',
  'Confidential AI Gaming Companion',
  'GDAI (Game Director AI)',
  'AI Dungeon Master',
  'validated action library',
  'Python GDAI server',
  'publicly released online-service and voice-communication capabilities',
]

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = new URL(entry.name, directory)
      return entry.isDirectory() ? collectFiles(new URL(`${entry.name}/`, directory)) : [entryPath]
    }),
  )

  return files.flat()
}

const files = await collectFiles(sourceRoot)
const sourceFiles = files.filter((file) => /\.(?:ts|tsx|css|svg)$/.test(file.pathname))
const contents = await Promise.all(
  sourceFiles.map(async (file) => ({
    file: path.relative(process.cwd(), file.pathname),
    text: await readFile(file, 'utf8'),
  })),
)

const failures = []
const hashToken = (token) => createHash('sha256').update(token).digest('hex')

for (const { file, text } of contents) {
  const tokens = text.match(/[A-Za-z][A-Za-z0-9_.-]*/g) ?? []
  for (const token of tokens) {
    if (forbiddenTokenHashes.includes(hashToken(token))) {
      failures.push(`A blocked public identifier was found in ${file}`)
    }
  }
}

const combinedSource = contents.map(({ text }) => text).join('\n')
for (const term of requiredTerms) {
  if (!combinedSource.includes(term)) {
    failures.push(`Required public wording "${term}" is missing`)
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exitCode = 1
} else {
  console.log('Public portfolio copy contains the approved anonymized labels and no blocked identifiers.')
}
