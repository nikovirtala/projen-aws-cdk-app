# Tech Stack

## ⚠️ Projen-Managed Project

This project is **entirely managed by projen**. Key implications:

- **DO NOT** manually edit generated files (package.json, tsconfig.json, etc.)
- **ALL** configuration changes must be made in `.projenrc.ts`
- After modifying `.projenrc.ts`, run `npx projen` to regenerate files
- Dependencies, scripts, and tooling are defined in `.projenrc.ts`, not package.json

## Core Technologies

- **Language**: TypeScript 5.9.3
- **Node.js**: >= 22.21.1
- **Package Manager**: pnpm 10
- **Build System**: projen
- **Module System**: ES Modules (ESM)

## Key Dependencies

- **AWS CDK**: 2.223.0+
- **projen**: ^0.98.10 - Project configuration and build orchestration
- **tsx**: TypeScript execution (replaces ts-node)
- **jsii**: ~5.9.3 - JavaScript interop for multi-language support

## Testing & Quality

- **Test Framework**: Vitest 4.x (not Jest)
- **Coverage**: @vitest/coverage-v8
- **Linter/Formatter**: Biome (not ESLint/Prettier)
  - 4 space indentation
  - 120 character line width
  - Organize imports on save

## Common Commands

All commands are run through projen:

```bash
# Build the project
npx projen build

# Run tests
npx projen test

# Run tests in watch mode
npx projen test:watch

# Update test snapshots
npx projen test:update

# Format and lint code
npx projen biome

# Compile TypeScript
npx projen compile

# Run default task (synth projen config)
npx projen default

# Upgrade dependencies
npx projen upgrade

# Package for distribution
npx projen package
```

## Development Setup

- Uses `mise.toml` for Node.js version management (optional `.nvmrc`)
- VSCode settings configured for Biome integration
- Auto-format on save enabled
