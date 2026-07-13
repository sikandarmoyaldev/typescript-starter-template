# Contributing to Typescript Starter Template

Thank you for your interest in contributing to the Typescript Starter Template! This document provides guidelines and instructions for setting up your development environment.

## 🚀 Development Setup

### 1. Clone the repository:

```bash
git clone https://github.com/sikandarmoyaldev/typescript-starter-template.git
cd typescript-starter-template
```

### 2. Install dependencies:

We use `pnpm` for fast, reliable dependency management.

```bash
pnpm install
```

### 3. Set up Git hooks:

This ensures your code is automatically formatted and linted before every commit.

```bash
pnpm run prepare
```

## 📏 Coding Standards

### TypeScript / Node.js

- **Formatting:** We use `Prettier` for formatting. Run `pnpm run format` before committing.
- **Linting:** We use `ESLint` (Flat Config). Run `pnpm run lint` to check for errors.
- **Typing:** Strict typing is enforced in `tsconfig.json`. Avoid using `any`. All functions and variables must have proper type definitions.
- **Structure:** Source code lives in `src/`. Utility functions and environment configurations should go in `src/lib/`.
- **Testing:** All new features or bug fixes should include unit tests using `Vitest`. Run `pnpm test` to ensure all tests pass.

### Imports

- **Path Aliases:** Always use the `@/*` path alias for importing files from the `src` directory (e.g., `import { env } from "@/lib/env"`).
- **ESM:** This project uses ES Modules (`"type": "module"`). Ensure all imports use the standard ESM syntax.

### Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Husky will automatically enforce this via commit hooks.

Examples:

- `feat: add new database connection utility`
- `fix: resolve environment variable parsing error`
- `docs: update README installation steps`
- `test: add unit tests for zod schema validation`

## 📦 Releasing

We use `release-it` to manage versions, changelogs, and GitHub releases. To release a new version:

1. Ensure you are on the `master` (or `main`) branch and your working directory is clean.
2. Run the release command:

    ```bash
    pnpm release
    ```

`release-it` will automatically:

- Bump the version in `package.json`.
- Update `CHANGELOG.md` using the Angular conventional changelog preset.
- Create a Git commit (`chore(release): v<version>`) and tag (`v<version>`).
- Push to GitHub and create a GitHub Release.

> **Note:** You can also run `pnpm release:dry` to see what changes would be made without actually releasing.

## 🔀 Pull Request Process

1. Ensure you are on your feature branch and your working directory is clean.
2. Run the linter, tests, and build to ensure everything passes:

    ```bash
    pnpm lint
    pnpm test
    pnpm build
    ```

3. Push your branch and open a Pull Request (PR) against the `master` branch.
4. Provide a clear description of what your PR does and why it is needed.
5. Wait for a maintainer to review and merge your PR.

## 🐛 Reporting Issues

If you find a bug or have a feature request, please open an issue on GitHub.

When reporting a bug, include:

- A clear and descriptive title.
- Steps to reproduce the behavior.
- Expected behavior vs. actual behavior.
- Your Node.js version and OS details.

Thank you for helping make this template better!
