import { cdk, javascript } from "projen";

const project = new cdk.JsiiProject({
  author: "Niko Virtala",
  authorAddress: "niko.virtala@hey.com",
  defaultReleaseBranch: "main",
  deps: ["projen"],
  description: "A projen template for AWS CDK TypeScript app. with ES Modules and TSX.",
  jest: false,
  jsiiVersion: "~5.5.0",
  license: "MIT",
  licensed: true,
  minNodeVersion: "22.11.0",
  name: "projen-aws-cdk-app",
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageManager: javascript.NodePackageManager.PNPM,
  packageName: "@nikovirtala/projen-aws-cdk-app",
  peerDeps: ["projen", "constructs"],
  pnpmVersion: "9",
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      tabWidth: 2,
      trailingComma: javascript.TrailingComma.ALL,
    },
  },
  projenrcTs: true,
  releaseToNpm: true,
  repositoryUrl: "https://github.com/nikovirtala/projen-aws-cdk-app.git",
  typescriptVersion: "5.5.4",
});

project.synth();
