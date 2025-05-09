import { PrimitiveType } from "@jsii/spec";
import { ProjenStruct, Struct } from "@mrgrain/jsii-struct-builder";
import { Vitest } from "@nikovirtala/projen-vitest";
import { cdk, javascript, TextFile } from "projen";

const nodeVersion = "22.15.0";

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
    devDeps: ["@jsii/spec", "@mrgrain/jsii-struct-builder", "@nikovirtala/projen-vitest"],
    autoApproveOptions: {
        secret: "GITHUB_TOKEN",
        allowedUsernames: ["nikovirtala"],
    },
    mergify: true,
    autoMerge: true,
    jest: false,
    jsiiVersion: "~5.8.3",
    license: "MIT",
    licensed: true,
    minNodeVersion: nodeVersion,
    name: "projen-aws-cdk-app",
    npmAccess: javascript.NpmAccess.PUBLIC,
    packageManager: javascript.NodePackageManager.PNPM,
    packageName: "@nikovirtala/projen-aws-cdk-app",
    peerDeps: ["@nikovirtala/projen-vitest", "aws-cdk-lib", "constructs", "projen"],
    pnpmVersion: "10",
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
    typescriptVersion: "5.8.3",
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
            name: "mise",
            type: { primitive: PrimitiveType.Boolean },
            optional: true,
            docs: {
                summary: "Create mise.toml with project Node.js version",
                default: "true",
            },
        },
        {
            name: "nvm",
            type: { primitive: PrimitiveType.Boolean },
            optional: true,
            docs: {
                summary: "Create nvmrc with project Node.js version",
                default: "false",
            },
        },
        {
            name: "vitest",
            type: { primitive: PrimitiveType.Boolean },
            optional: true,
            docs: {
                summary: "Enable testing with Vitest.",
                default: "true",
            },
        },
        {
            name: "vitestOptions",
            type: { fqn: "@nikovirtala/projen-vitest.VitestOptions" },
            optional: true,
            docs: {
                summary: "The Vitest configuration (when enabled).",
                default: "- `@nikovirtala/projen-vitest` defaults",
            },
        },
    );

new Vitest(project, { vitestVersion: "^3" });

project.vscode?.extensions.addRecommendations("dbaeumer.vscode-eslint", "esbenp.prettier-vscode");

project.vscode?.settings.addSettings({
    "editor.codeActionsOnSave": {
        "source.fixAll": "explicit",
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
});

new TextFile(project, "mise.toml", {
    committed: true,
    readonly: true,
    lines: ["[tools]", `node = "${nodeVersion}"`],
});

project.synth();
