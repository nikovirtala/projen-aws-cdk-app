import { cdk, javascript } from "projen";
const project = new cdk.JsiiProject({
  author: "Niko Virtala",
  authorAddress: "niko.virtala@hey.com",
  defaultReleaseBranch: "main",
  deps: ["projen"],
  description:
    "A projen template for AWS CDK TypeScript app. with ES Modules and TSX.",
  jest: false,
  jsiiVersion: "~5.0.0",
  minNodeVersion: "18.18.0",
  name: "projen-aws-cdk-app",
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,
  packageName: "@nikovirtala/projen-aws-cdk-app",
  peerDeps: ["projen", "constructs"],
  prettier: true,
  projenrcTs: true,
  repositoryUrl: "https://github.com/nikovirtala/projen-aws-cdk-app.git",
});
project.synth();
