import * as path from "path";
import { Vitest } from "@nikovirtala/projen-vitest";
import { awscdk, javascript, TextFile } from "projen";
import { AwsCdkAppOptions } from "./AwsCdkAppOptions";

export { AwsCdkAppOptions } from "./AwsCdkAppOptions";

export class AwsCdkApp extends awscdk.AwsCdkTypeScriptApp {
    constructor(options: AwsCdkAppOptions) {
        const {
            cdkVersion,
            cdkVersionPinning,
            defaultReleaseBranch,
            minNodeVersion,
            prettier,
            prettierOptions,
            sampleCode,
            tsconfig,
            typescriptVersion,
            vitest,
            vitestOptions,
            ...awsCdkTypeScriptAppOptions
        } = options;

        const defaultTsConfig = {
            compilerOptions: {
                allowImportingTsExtensions: true,
                allowSyntheticDefaultImports: true,
                alwaysStrict: true,
                declaration: true,
                esModuleInterop: true,
                experimentalDecorators: true,
                inlineSourceMap: true,
                inlineSources: true,
                isolatedModules: true,
                lib: ["esnext"],
                module: "nodenext",
                moduleResolution: javascript.TypeScriptModuleResolution.NODE_NEXT,
                noEmitOnError: false,
                noFallthroughCasesInSwitch: true,
                noImplicitAny: true,
                noImplicitOverride: true,
                noImplicitReturns: true,
                noImplicitThis: true,
                noUnusedLocals: true,
                noUnusedParameters: true,
                resolveJsonModule: true,
                strict: true,
                strictNullChecks: true,
                strictPropertyInitialization: true,
                stripInternal: true,
                target: "esnext",
            },
        };

        const nodeVersion = minNodeVersion ?? "22.14.0";

        super({
            cdkVersion: !cdkVersion || cdkVersion === "2.1.0" ? "2.173.3" : cdkVersion, // this does not work!
            cdkVersionPinning: cdkVersionPinning ?? false,
            defaultReleaseBranch: defaultReleaseBranch ?? "main",
            jest: false,
            minNodeVersion: nodeVersion,
            prettier: prettier ?? true,
            prettierOptions: prettierOptions ?? {
                settings: {
                    printWidth: 120,
                    tabWidth: 4,
                    trailingComma: javascript.TrailingComma.ALL,
                },
            },
            projenrcTs: true,
            sampleCode: sampleCode ?? true,
            tsconfig: {
                compilerOptions: {
                    ...defaultTsConfig.compilerOptions,
                    ...(tsconfig?.compilerOptions ?? {}),
                },
            },
            typescriptVersion: typescriptVersion ?? "5.8.2",
            ...awsCdkTypeScriptAppOptions,
        });

        // switch commonjs to es modules
        this.package.addField("type", "module");

        // execute code with tsx instead of ts-node
        this.deps.removeDependency("ts-node");
        this.addDevDeps("tsx");
        this.defaultTask?.reset();
        this.defaultTask?.exec(`tsx --tsconfig ${this.tsconfigDev?.file.path} .projenrc.ts`);

        this.cdkConfig.json.addOverride(
            "app",
            `tsx --tsconfig ${this.tsconfig?.file.path} ${path.posix.join(this.srcdir, this.appEntrypoint)}`,
        );

        // lint code with modern ecma version
        this.tryFindObjectFile(".eslintrc.json")?.addOverride("parserOptions.ecmaVersion", "latest");

        this.eslint?.addRules({
            "@typescript-eslint/await-thenable": "error",
        });

        this.vscode?.extensions.addRecommendations("dbaeumer.vscode-eslint", "esbenp.prettier-vscode");

        this.vscode?.settings.addSettings({
            "editor.codeActionsOnSave": {
                "source.fixAll": "explicit",
            },
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": true,
            "editor.tabSize": 4,
        });

        new TextFile(this, ".nvmrc", {
            committed: true,
            readonly: true,
            lines: ["v" + nodeVersion],
        });

        if (vitest ?? true) {
            const vitestVersion = "^3";
            this.addDevDeps("@nikovirtala/projen-vitest", `vitest@${vitestVersion}`);
            new Vitest(this, { vitestVersion, ...vitestOptions });
        }
    }
}
