# Product

This is a projen template for creating modern AWS CDK TypeScript applications. It extends projen's standard `AwsCdkTypeScriptApp` with key improvements:

- Uses `tsx` instead of `ts-node` for faster execution
- ES Modules (ESM) instead of CommonJS
- Vitest instead of Jest for testing
- Biome for linting and formatting (no ESLint/Prettier)

The template is published as `@nikovirtala/projen-aws-cdk-app` and allows users to scaffold new CDK projects with these modern conventions pre-configured.
