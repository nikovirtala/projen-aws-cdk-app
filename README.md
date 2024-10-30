# projen template for modern AWS CDK app

You can use this template to create an AWS CDK TypeScript application using [projen](https://github.com/projen/projen).

This template is mostly like the projen's standard [`AwsCdkTypeScriptApp`](https://github.com/projen/projen/blob/main/src/awscdk/awscdk-app-ts.ts) template with the following key differences:

- The code is executed using [`tsx`](https://github.com/privatenumber/tsx) instead of the default `ts-node`
- ES Modules (ECMAScript modules) (ESM) are used instead of the default CommonJS
