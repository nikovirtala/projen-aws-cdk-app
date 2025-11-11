import { PrimitiveType } from "@jsii/spec";
import { ProjenStruct, Struct } from "@mrgrain/jsii-struct-builder";
import { Vitest } from "@nikovirtala/projen-vitest";
import { cdk, JsonPatch, javascript, TextFile } from "projen";
import { IndentStyle } from "projen/lib/javascript/biome/biome-config";

const nodeVersion = "22.21.1";

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
    eslint: false,
    biome: true,
    biomeOptions: {
        biomeConfig: {
            formatter: {
                indentStyle: IndentStyle.SPACE,
                indentWidth: 4,
                lineWidth: 120,
                useEditorconfig: false,
            },
        },
        formatter: true,
        linter: true,
    },
    mergify: true,
    autoMerge: true,
    jest: false,
    jsiiVersion: "~5.9.3",
    license: "MIT",
    licensed: true,
    minNodeVersion: nodeVersion,
    name: "projen-aws-cdk-app",
    npmAccess: javascript.NpmAccess.PUBLIC,
    packageManager: javascript.NodePackageManager.PNPM,
    packageName: "@nikovirtala/projen-aws-cdk-app",
    peerDeps: ["@nikovirtala/projen-vitest", "aws-cdk-lib", "constructs", "projen"],
    pnpmVersion: "10",
    prettier: false,
    projenrcTs: true,
    releaseToNpm: true,
    npmTrustedPublishing: true,
    repositoryUrl: "https://github.com/nikovirtala/projen-aws-cdk-app.git",
    typescriptVersion: "5.9.3",
});

// TypeScript utility types are **not** allowed in `jsii` applications :´(
new ProjenStruct(project, {
    name: "AwsCdkAppOptions",
    filePath: "./src/AwsCdkAppOptions.generated.ts",
    outputFileOptions: { readonly: false },
})
    .mixin(Struct.fromFqn("projen.awscdk.AwsCdkTypeScriptAppOptions"))
    .withoutDeprecated()
    .omit("biome")
    .omit("eslint")
    .omit("eslintOptions")
    .omit("jest")
    .omit("jestOptions")
    .omit("prettier")
    .omit("prettierOptions")
    .omit("sampleCode")
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

new Vitest(project, { vitestVersion: "^4" });

// @nikovirtala/projen-vitest is both dev and peer dependency which ncu doesn't update on a single run
project.upgradeWorkflow?.postUpgradeTask.exec(
    "pnpm dlx npm-check-updates@18 --upgrade --target=minor --peer --dep=dev,peer --filter=@nikovirtala/projen-vitest",
);
project.upgradeWorkflow?.postUpgradeTask.exec("pnpm i --no-frozen-lockfile");

project.vscode?.extensions.addRecommendations("biomejs.biome");

project.vscode?.settings.addSettings({
    "editor.codeActionsOnSave": {
        "source.organizeImports.biome": "always",
    },
    "editor.defaultFormatter": "biomejs.biome",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
});

new TextFile(project, "mise.toml", {
    committed: true,
    readonly: true,
    lines: ["[tools]", `node = "${nodeVersion}"`],
});

// use node.js 24.x to get new enough npm to satisfy: trusted publishing requires npm CLI version 11.5.1 or later.
project.github
    ?.tryFindWorkflow("release")
    ?.file?.patch(JsonPatch.replace("/jobs/release_npm/steps/0/with/node-version", "24.x"));

// remove once configured correctly to biome, mise and vitest components
project.npmignore?.addPatterns("biome.jsonc", "mise.toml", "vitest.config.ts");

project.synth();
