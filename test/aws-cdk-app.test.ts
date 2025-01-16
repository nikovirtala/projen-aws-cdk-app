import { Testing } from "projen";
import { describe, expect, test } from "vitest";

import { AwsCdkApp } from "../src";

describe("AwsCdkApp", () => {
    test("snapshot", () => {
        const project = new AwsCdkApp({
            cdkVersion: "2.176.0",
            defaultReleaseBranch: "main",
            name: "test-app",
        });

        const snapshot = Testing.synth(project);
        expect(snapshot).toMatchSnapshot();
    });

    test("includes CDK dependencies", () => {
        const project = new AwsCdkApp({
            cdkVersion: "2.176.0",
            defaultReleaseBranch: "main",
            name: "test-app",
        });

        const snapshot = Testing.synth(project);
        expect(snapshot["package.json"].dependencies["aws-cdk-lib"]).toBeDefined();
        expect(snapshot["package.json"].dependencies.constructs).toBeDefined();
    });

    test("includes Vitest dependencies", () => {
        const project = new AwsCdkApp({
            cdkVersion: "2.176.0",
            defaultReleaseBranch: "main",
            name: "test-app",
        });

        const snapshot = Testing.synth(project);
        expect(snapshot["package.json"].devDependencies.vitest).toBeDefined();
        expect(snapshot["vitest.config.ts"]).toBeDefined();
    });
});
