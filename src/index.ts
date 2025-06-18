import * as path from "node:path";
import { Vitest } from "@nikovirtala/projen-vitest";
import { TextFile, awscdk, javascript } from "projen";
import type { AwsCdkAppOptions } from "./AwsCdkAppOptions.generated";

export { AwsCdkAppOptions } from "./AwsCdkAppOptions.generated";

export class AwsCdkApp extends awscdk.AwsCdkTypeScriptApp {
    constructor(options: AwsCdkAppOptions) {
        const {
            biome,
            biomeOptions,
            cdkVersion,
            cdkVersionPinning,
            defaultReleaseBranch,
            minNodeVersion,
            mise,
            nvm,
            packageManager,
            pnpmVersion,
            tsconfig,
            typescriptVersion,
            vitest,
            vitestOptions,
            ...awsCdkTypeScriptAppOptions
        } = options;

        const defaultBiomeOptions: javascript.BiomeOptions = {
            biomeConfig: {
                formatter: {
                    indentStyle: "space",
                    indentWidth: 4,
                    lineWidth: 120,
                    useEditorconfig: false,
                },
            },
            formatter: true,
            linter: true,
            organizeImports: true,
        };

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

        const nodeVersion = minNodeVersion ?? "22.16.0";

        super({
            biome: biome ?? true,
            biomeOptions: biomeOptions ?? defaultBiomeOptions,
            cdkVersion: !cdkVersion || cdkVersion === "2.1.0" ? "2.201.0" : cdkVersion, // this does not work!
            cdkVersionPinning: cdkVersionPinning ?? false,
            defaultReleaseBranch: defaultReleaseBranch ?? "main",
            minNodeVersion: nodeVersion,
            packageManager: packageManager ?? javascript.NodePackageManager.PNPM,
            pnpmVersion: pnpmVersion ?? "10",
            tsconfig: {
                compilerOptions: {
                    ...defaultTsConfig.compilerOptions,
                    ...(tsconfig?.compilerOptions ?? {}),
                },
            },
            typescriptVersion: typescriptVersion ?? "5.8.3",
            ...awsCdkTypeScriptAppOptions,
            eslint: false,
            jest: false,
            prettier: false,
            projenrcTs: true,
            sampleCode: true,
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

        this.vscode?.extensions.addRecommendations("biomejs.biome");

        this.vscode?.settings.addSettings({
            "editor.codeActionsOnSave": {
                "source.organizeImports.biome": "always",
            },
            "editor.defaultFormatter": "biomejs.biome",
            "editor.formatOnSave": true,
            "editor.tabSize": 4,
        });

        if (nvm ?? false) {
            new TextFile(this, ".nvmrc", {
                committed: true,
                readonly: true,
                lines: [`v${nodeVersion}`],
            });
        }

        if (mise ?? true) {
            new TextFile(this, "mise.toml", {
                committed: true,
                readonly: true,
                lines: ["[tools]", `node = "${nodeVersion}"`],
            });
        }

        if (vitest ?? true) {
            const vitestVersion = "^3";
            this.addDevDeps("@nikovirtala/projen-vitest", `vitest@${vitestVersion}`);
            new Vitest(this, { vitestVersion, ...vitestOptions });
        }
    }
}
