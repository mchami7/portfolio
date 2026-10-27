# Professional experience coverage audit

Scope: existing portfolio, verified CV catalogue and the user-confirmed CI pipeline configuration/modification work. This checks documented experience, not undisclosed work or eligibility for every job posting.

Attribution correction: the user confirmed that a coworker implemented the macOS audio-threading fix and CPAL fork integration. Those claims and CPAL as a personal skill are excluded from the CV catalogue, application PDFs and portfolio. Older case-study planning references to that example are superseded by this correction.

The user also confirmed that capture and image-paste work was not theirs. Screen capture and image-paste implementation are excluded from their CV and portfolio contributions and the underlying catalogue.

| Capability | Software | Gameplay | UI | Applied AI |
| --- | --- | --- | --- | --- |
| Architecture and framework decisions | Present | Present | Present | Present |
| Game and desktop UI | Present | Present | Present | Present |
| Native desktop integration | Present | Present | Present | Present |
| Gameplay, rules and progression | Present | Present | Present | Present |
| Multiplayer architecture and validation | Present | Present | Present | Present |
| Online services and partner integration | Present | Present | Present | Present |
| Cross-platform support | Present | Present | Present | Present |
| Designer tools and controlled AI-director actions | Present | Present | Present | Present |
| Grounded LLM research and structured outputs | Present | Present | Present | Present |
| Contextual dialogue and verification | Present | Present | Present | Present |
| Services and resilience | Present | Present | Present | Present |
| Automated testing | Present | Present | Present | Present |
| Build and release automation | Present | Present | Present | Present |
| CI pipeline configuration and modification | Present | Present | Present | Present |
| Published games and commercial delivery | Present | Present | Present | Present |
| Persistence and player-created content | Present | Present | Present | Present |
| Data-driven configuration and input | Present | Present | Present | Present |
| Team contribution and technical documentation | Present | Present | Present | Present |

CI work uses standard capability wording without naming the specific platforms. The user confirmed this work belonged to both the InGame demo and desktop AI companion. It is integrated into their existing platform/build-delivery bullets, with no standalone CI bullet.

The toolkit remains a compact index. Specific evidence is carried by the professional experience bullets. Protobuf is restored beside gRPC; CI pipelines and build/release automation are explicit capabilities.

Academic/personal projects remain on the portfolio, as agreed. No model-training ownership, game-director model/server implementation, full CI infrastructure ownership or unconfirmed engine UI frameworks have been added.

All four generated CVs remain two A4 pages with 11pt experience text. All eight rendered pages were inspected. The 13 CV regression tests, portfolio lint/build and public-copy checks pass.

## Outcome wording provenance

The revised CV copy uses qualitative outcomes already described in the portfolio, while preserving professional fact mappings and role-specific emphasis.

| CV contribution | Supported purpose or outcome | Portfolio source section |
| --- | --- | --- |
| Replicated InGame demo | Validate online services through playable match flows | Building a Playable SDK Validation Environment |
| Local dedicated-server debugging | Reproduce multiplayer and partner integration issues | Cross-Platform Validation |
| Timeline/editor plugin | Let designers author, preview and validate session actions | Designer-Authored Session Tooling |
| Data-driven co-op runs | Make progression and session content configurable | Multiplayer and Run Architecture |
| Versioned research cases and viewer | Compare generated cases between research runs | From Research to Playable Cases |
| Source-linked evidence-board UI | Let players reopen original evidence passages | A Tactile Evidence Board |
| Mocked schema and UI tests | Validate UI flows across viewports without live model calls | Prototype Iteration and Validation |
| Multi-window desktop UI | Support full chat and lightweight use alongside games | Designing the Companion Architecture |
| Competition control tool | Manage competition timing and retrieve winner data | Building the Competition Loop |

All sources above refer to `src/data/projects.ts`. CI remains integrated in the InGame and desktop project bullets, without naming platforms. No outcomes were invented for CI configuration beyond the user-confirmed actions.

## Desktop AI companion source review

The user confirmed authorship of the React chat integration, Rust HTTP/streaming layer and chat-history persistence after a source review. The imported checkout has only bulk commits; code establishes behaviour, while the user confirmation establishes attribution.

| Contribution or project context | Local source evidence |
| --- | --- |
| Prompt submission from both UI modes, loading/error state and reply display | `Client/src/components/Chat/ChatboxLayout.jsx`, `CompanionLayout.jsx` |
| HTTP request bridge, complete responses and SSE event parsing | `Client/src-tauri/src/commands/prompt.rs` |
| Progressive reply display | `Client/src/hooks/useStreamingDisplay.js` |
| Shared conversation state, per-user saving and restoration | `Client/src/context/SessionContext.jsx`, `Client/src-tauri/src/commands/chat_history.rs` |
| Session and game context sent with requests | `Client/src-tauri/src/state.rs` |
| Game assistance, conversational replies, contextual reactions and proactive suggestions | `Server/prompts/router.txt`, `casual_answer.txt`, `reaction.txt`, `proactivity.txt` |

The frontend snapshot uses JavaScript/JSX, so project-specific TypeScript labels were corrected. The server's retrieval, routing and generation features are project context only. Screen capture, image-paste implementation and the macOS audio fix remain excluded from personal contributions.
