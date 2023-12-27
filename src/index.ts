import { awscdk, javascript } from "projen";

export interface AwsCdkAppOptions extends awscdk.AwsCdkTypeScriptAppOptions {}

export class AwsCdkApp extends awscdk.AwsCdkTypeScriptApp {
  constructor(options: AwsCdkAppOptions) {
    super({
      ...options,
      cdkVersion: options.cdkVersion ?? "2.115.0",
      cdkVersionPinning: options.cdkVersionPinning ?? true,
      defaultReleaseBranch: options.defaultReleaseBranch ?? "main",
      minNodeVersion: options.minNodeVersion ?? "18.18.0",
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
          isolatedModules: false,
          lib: ["esnext", "dom"],
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
    });

    // switch commonjs to es modules
    this.package.addField("type", "module");

    // execute code with tsx instead of ts-node
    this.deps.removeDependency("ts-node");
    this.addDevDeps("tsx");
    this.defaultTask?.reset();
    this.defaultTask?.exec(
      `tsx --tsconfig ${this.tsconfigDev?.file.path} .projenrc.ts,
      )}`,
    );

    this.cdkConfig.json.addOverride(
      "app",
      `tsx --tsconfig ${this.tsconfig?.file.path} ${this.srcdir}/${this.appEntrypoint}`,
    );

    this.eslint?.addRules({
      "@typescript-eslint/await-thenable": "error",
    });
  }
}
