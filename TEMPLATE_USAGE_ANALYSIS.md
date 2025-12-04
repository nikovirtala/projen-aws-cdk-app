# Template Usage Analysis Report

**Generated:** 2024-12-04  
**Template:** @nikovirtala/projen-aws-cdk-app  
**Repository Owner:** nikovirtala

---

## Executive Summary

This report analyzes the adoption and usage patterns of the `@nikovirtala/projen-aws-cdk-app` template across all available repositories in the connected workspace.

### Key Findings

- **Total Repositories Scanned:** 1
- **Repositories Using Template:** 0 (excluding the template repository itself)
- **Workspace Status:** Only the template repository is available in the workspace

---

## Repository Inventory

### Available Repositories

The following repositories were found in the workspace `/projects/sandbox`:

1. **projen-aws-cdk-app** (`/projects/sandbox/projen-aws-cdk-app`)
   - **Type:** Template Repository (self)
   - **Status:** This is the source template repository, not a consumer

---

## Template Usage Analysis

### Repositories Using @nikovirtala/projen-aws-cdk-app

**Finding:** No external repositories in the workspace are currently using this template.

### Search Methodology

The analysis performed the following comprehensive search:

1. **Repository Discovery:**
   - Scanned `/projects/sandbox` directory for all available repositories
   - Identified 1 repository: `projen-aws-cdk-app`

2. **Package.json Analysis:**
   - Searched for `@nikovirtala/projen-aws-cdk-app` in:
     - `dependencies` field
     - `devDependencies` field
     - `peerDependencies` field
   - Found references only in the template repository itself (self-references)

3. **.projenrc.ts Analysis:**
   - Searched for configuration patterns and imports
   - Checked for template initialization patterns
   - Found only the template's own configuration

### Self-Reference Analysis (Template Repository)

The `projen-aws-cdk-app` repository contains the following self-references:

#### package.json
```json
{
  "name": "@nikovirtala/projen-aws-cdk-app",
  "version": "0.0.0",
  "description": "A projen template for AWS CDK TypeScript app. with ES Modules and TSX."
}
```

**Dependency Configuration:**
- **dependencies:** `projen` (^0.98.10)
- **peerDependencies:**
  - `@nikovirtala/projen-vitest` (^2.1.5)
  - `aws-cdk-lib` (^2.223.0)
  - `constructs` (^10.4.3)
  - `projen` (^0.98.10)
- **devDependencies:** Multiple development tools including TypeScript, Vitest, JSII, etc.

#### .projenrc.ts Configuration

The template's own configuration uses:

```typescript
const project = new cdk.JsiiProject({
    name: "projen-aws-cdk-app",
    packageName: "@nikovirtala/projen-aws-cdk-app",
    description: "A projen template for AWS CDK TypeScript app. with ES Modules and TSX.",
    // ... other configuration
});
```

**Key Configuration Patterns:**
- Uses `cdk.JsiiProject` as the base project type
- Configures Biome for linting/formatting (not ESLint/Prettier)
- Integrates Vitest for testing (not Jest)
- Supports both mise.toml and nvmrc for Node.js version management
- Node.js version: 22.21.1
- TypeScript version: 5.9.3
- JSII version: ~5.9.3
- Package manager: PNPM (version 10)

---

## Template Features & Configuration Patterns

Based on the template repository analysis, consumers of this template would typically:

### Template Initialization

```bash
npx projen new --from @nikovirtala/projen-aws-cdk-app
```

### Expected Configuration in Consumer Projects

When a project uses this template, it would typically have a `.projenrc.ts` file importing from the package:

```typescript
import { AwsCdkApp } from "@nikovirtala/projen-aws-cdk-app";

const project = new AwsCdkApp({
    // configuration options
});

project.synth();
```

### Template Options Available

The template provides the following customizable options (from `AwsCdkAppOptions`):

1. **mise** (boolean, default: true) - Create mise.toml with project Node.js version
2. **nvm** (boolean, default: false) - Create nvmrc with project Node.js version
3. **vitest** (boolean, default: true) - Enable testing with Vitest
4. **vitestOptions** - Configuration options for Vitest

Plus all standard `AwsCdkTypeScriptAppOptions` except:
- biome (enforced enabled)
- eslint (enforced disabled)
- jest (enforced disabled)
- prettier (enforced disabled)
- sampleCode (removed)

---

## Summary Statistics

### Template Adoption

| Metric | Count |
|--------|-------|
| Total Repositories in Workspace | 1 |
| Template Repository | 1 |
| Consumer Repositories | 0 |
| Adoption Rate | N/A (no consumers in workspace) |

### Version Distribution

| Version | Repositories |
|---------|--------------|
| 0.0.0 (development) | 1 (template itself) |

### Dependency Type Distribution

| Type | Count |
|------|-------|
| dependency | 0 |
| devDependency | 0 |
| peerDependency | 0 |

---

## Recommendations

### For Template Development

1. **Publishing Status:** The template is at version `0.0.0`, indicating it may not yet be published to npm or is in early development.

2. **Testing with Consumer Projects:** To validate template functionality, consider creating example consumer projects in the workspace.

3. **Documentation:** The template has good documentation in README.md explaining how to initialize new projects.

### For Future Analysis

When consumer projects are added to the workspace, this analysis should be re-run to track:
- Template adoption rate
- Common configuration patterns
- Version distribution across projects
- Feature usage (mise vs nvm, vitest configurations, etc.)

---

## Conclusion

The workspace currently contains only the template repository itself (`projen-aws-cdk-app`) with no consumer projects. This is a normal state for a template development environment where the focus is on creating and refining the template rather than consuming it.

The template is well-structured and provides modern tooling choices (ESM, Vitest, Biome, tsx) as alternatives to the standard projen AWS CDK template. Once published and adopted by other projects, this analysis can be re-run to track actual usage patterns and adoption metrics.

### Template Characteristics

- **Purpose:** Modern AWS CDK TypeScript application template
- **Key Differentiators:** ESM, tsx execution, Vitest testing, Biome formatting
- **Maturity:** Development version (0.0.0)
- **Distribution:** Configured for npm with public access
- **License:** MIT

---

## Appendix: Search Commands Used

```bash
# List all repositories in workspace
find /projects/sandbox -type d -name ".git" -o -name "package.json"

# Search for package references
grep -r "@nikovirtala/projen-aws-cdk-app" /projects/sandbox --include="package.json" --include=".projenrc.ts"

# Find all package.json files
find /projects/sandbox -type f -name "package.json"

# Find all .projenrc.ts files
find /projects/sandbox -type f -name ".projenrc.ts"
```

---

**Report End**
