import * as path from "path";
import { awscdk, javascript } from "projen";

export class AwsCdkApp extends awscdk.AwsCdkTypeScriptApp {
  constructor(options: awscdk.AwsCdkTypeScriptAppOptions) {
    const {
      cdkVersion,
      cdkVersionPinning,
      defaultReleaseBranch,
      jest,
      minNodeVersion,
      prettier,
      prettierOptions,
      sampleCode,
      tsconfig,
      typescriptVersion,
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

    super({
      cdkVersion: !cdkVersion || cdkVersion === "2.1.0" ? "2.164.1" : cdkVersion,
      cdkVersionPinning: cdkVersionPinning ?? true,
      defaultReleaseBranch: defaultReleaseBranch ?? "main",
      jest: jest ?? false,
      minNodeVersion: minNodeVersion ?? "22.11.0",
      prettier: prettier ?? true,
      prettierOptions: prettierOptions ?? {
        settings: {
          printWidth: 120,
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
      typescriptVersion: typescriptVersion ?? "5.6.3",
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
  }
}
