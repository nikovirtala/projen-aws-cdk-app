# projen template for modern AWS CDK app

> [!WARNING]
> **This package is deprecated** and won't get new features or fixes. Use [`@nikovirtala/projen-constructs`](https://github.com/nikovirtala/projen-constructs) instead.
>
> Replace the dev dependency `@nikovirtala/projen-aws-cdk-app` with `@nikovirtala/projen-constructs`, then change the import:
>
> ```typescript
> import { AwsCdkTypeScriptAppProject } from "@nikovirtala/projen-constructs";
> ```
>
> `AwsCdkApp` becomes `AwsCdkTypeScriptAppProject`. The `nvm` option is gone (the template pins Node.js with mise), and Homebrew is on by default.
>
> See the [migration guide](https://github.com/nikovirtala/projen-constructs#migrating-from-the-standalone-packages) for the steps and the differences to expect.

You can use this template to create an AWS CDK TypeScript application using [projen](https://github.com/projen/projen).

This template is mostly like the projen's standard [`AwsCdkTypeScriptApp`](https://github.com/projen/projen/blob/main/src/awscdk/awscdk-app-ts.ts) template with the following key differences:

- The code is executed using [`tsx`](https://github.com/privatenumber/tsx) instead of the default `ts-node`
- ES Modules (ECMAScript modules) (ESM) are used instead of the default CommonJS
- Jest is replaced with [Vitest](https://github.com/nikovirtala/projen-vitest)

## how to get started?

You can initialize a new projen project using this template with following command:

```sh
npx projen new --from @nikovirtala/projen-aws-cdk-app
```
