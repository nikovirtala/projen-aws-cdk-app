import { PrimitiveType } from "@jsii/spec";
import { ProjenStruct, Struct } from "@mrgrain/jsii-struct-builder";
import { cdk, javascript, TextFile } from "projen";

const nodeVersion = "22.12.0";

const project = new cdk.JsiiProject({
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    defaultReleaseBranch: "main",
    deps: ["projen"],
    description: "A projen template for AWS CDK TypeScript app. with ES Modules and TSX.",
    dependabot: false,
    depsUpgradeOptions: {
        workflowOptions: {
            labels: ["auto-approve", "auto-merge"],
        },
    },
    devDeps: ["@mrgrain/jsii-struct-builder", "@jsii/spec"],
    autoApproveOptions: {
        secret: "GITHUB_TOKEN",
        allowedUsernames: ["nikovirtala"],
    },
    mergify: true,
    autoMerge: true,
    jest: false,
    jsiiVersion: "~5.7.0",
    license: "MIT",
    licensed: true,
    minNodeVersion: nodeVersion,
    name: "projen-aws-cdk-app",
    npmAccess: javascript.NpmAccess.PUBLIC,
    packageManager: javascript.NodePackageManager.PNPM,
    packageName: "@nikovirtala/projen-aws-cdk-app",
    peerDeps: ["aws-cdk-lib", "@nikovirtala/projen-vitest", "constructs", "projen"],
    pnpmVersion: "9",
    prettier: true,
    prettierOptions: {
        settings: {
            printWidth: 120,
            tabWidth: 4,
            trailingComma: javascript.TrailingComma.ALL,
        },
    },
    projenrcTs: true,
    releaseToNpm: true,
    repositoryUrl: "https://github.com/nikovirtala/projen-aws-cdk-app.git",
    typescriptVersion: "5.7.2",
});

// TypeScript utility types are **not** allowed in `jsii` applications :´(
new ProjenStruct(project, { name: "AwsCdkAppOptions", outputFileOptions: { readonly: false } })
    .mixin(Struct.fromFqn("projen.awscdk.AwsCdkTypeScriptAppOptions"))
    .withoutDeprecated()
    .omit("jest")
    .omit("jestOptions")
    .omit("tsJestOptions")
    .add(
        {
            name: "vitest",
            type: { primitive: PrimitiveType.Boolean },
            docs: {
                summary: "Enable testing with Vitest.",
                default: "true",
            },
        },
        {
            name: "vitestOptions",
            type: { fqn: "@nikovirtala/projen-vitest.VitestOptions" },
            docs: {
                summary: "The Vitest configuration (when enabled).",
                default: "- `@nikovirtala/projen-vitest` defaults",
            },
        },
    );

project.vscode?.extensions.addRecommendations("dbaeumer.vscode-eslint", "esbenp.prettier-vscode");

project.vscode?.settings.addSettings({
    "editor.codeActionsOnSave": {
        "source.fixAll": "explicit",
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
});

new TextFile(project, ".nvmrc", {
    committed: true,
    readonly: true,
    lines: ["v" + nodeVersion],
});

project.synth();
