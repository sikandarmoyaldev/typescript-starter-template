# Changelog

## 0.0.1 (2026-07-13)

### Project Foundation and Architecture

* Initialized a pure Node.js environment with TypeScript for a modern, type-safe, and highly performant backend or CLI foundation.
* Configured pnpm as the primary package manager for fast and disk-space efficient dependency management.
* Established a clean, modular project structure under the `src/` directory with path aliases (`@/*`) configured via `tsconfig.json` and `tsc-alias`.
* Set up `tsup` for blazing-fast, zero-config TypeScript bundling and `tsx` for development hot-reloading.
* Configured the project for modern ECMAScript Modules (ESM) with proper `exports` and `types` fields in `package.json` for npm publishing.

### Environment and Configuration

* Set up `dotenv` and `zod` for strict, type-safe environment variable validation at runtime.
* Created `.env.example` with secure placeholders for standard environment variables like `NODE_ENV`, `PORT`, and `DATABASE_URL`.

### Testing Infrastructure

* Integrated `vitest` for lightning-fast unit testing, configured to understand TypeScript path aliases and run in a Node.js environment out of the box.

### Code Quality and Developer Experience

* Pre-configured ESLint (Flat Config) and Prettier for consistent code formatting, linting, and strict typing enforcement.
* Integrated Husky and lint-staged to automatically run code quality checks and formatting before every Git commit.
* Set up Conventional Commits enforcement to maintain a clean and predictable Git history.

### Release Automation

* Integrated `release-it` and `@release-it/conventional-changelog` for automated semantic versioning.
* Configured automated changelog generation based on conventional commit messages.
* Set up automated GitHub Releases creation and Git tagging upon version bump.

### Template Management

* Added a GitHub Action workflow to automatically clean up template-specific files (such as this CHANGELOG.md and the workflow itself) when a user creates a new project using the GitHub "Use this template" feature.
