# Product Overview

This is a projen template for creating modern AWS CDK TypeScript applications. It extends the standard projen `AwsCdkTypeScriptApp` template with key improvements:

- **ES Modules (ESM)** instead of CommonJS
- **tsx execution** instead of ts-node for better performance
- **Vitest** instead of Jest for testing
- **Biome** for formatting and linting (no ESLint/Prettier)

The template generates a reusable projen construct that developers can use to bootstrap new AWS CDK projects with modern tooling and best practices built-in.

## Key Features

- Modern JavaScript/TypeScript tooling
- AWS CDK v2 support
- Automated dependency management
- Built-in testing with Vitest
- Code formatting with Biome
- JSII compatibility for multi-language support
- PNPM package management