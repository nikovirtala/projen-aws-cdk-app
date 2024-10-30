import * as path from "path";
import { awscdk, javascript } from "projen";

export class AwsCdkApp extends awscdk.AwsCdkTypeScriptApp {
  constructor(options: awscdk.AwsCdkTypeScriptAppOptions) {
    super({
      ...options,
      cdkVersion: options.cdkVersion ?? "2.164.1",
      cdkVersionPinning: options.cdkVersionPinning ?? true,
      defaultReleaseBranch: options.defaultReleaseBranch ?? "main",
      minNodeVersion: options.minNodeVersion ?? "22.11.0",
      prettier: options.prettier ?? true,
      prettierOptions: options.prettierOptions ?? {
        settings: {
          printWidth: 120,
        },
      },
      projenrcTs: true,
      sampleCode: options.sampleCode ?? false,
      tsconfig: options.tsconfig ?? {
        compilerOptions: {
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
      },
      typescriptVersion: options.typescriptVersion ?? "5.5.4",
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
