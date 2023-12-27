# projen template for AWS CDK app

You can use this template to create an AWS CDK TypeScript application using [projen](https://github.com/projen/projen).

This is mainly like the [`AwsCdkTypeScriptApp`](https://github.com/projen/projen/blob/main/src/awscdk/awscdk-app-ts.ts) published as a part of projen, with two key differences:

- Instead of `ts-node`, this is using [`tsx`](https://github.com/privatenumber/tsx) to execute the code
- Instead of CommonJS modules, this is using ES Modules
