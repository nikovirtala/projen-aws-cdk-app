# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsCdkApp <a name="AwsCdkApp" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.Initializer"></a>

```typescript
import { AwsCdkApp } from '@nikovirtala/projen-aws-cdk-app'

new AwsCdkApp(options: AwsCdkAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions">AwsCdkAppOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions">AwsCdkAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addCdkDependency">addCdkDependency</a></code> | Adds an AWS CDK module dependencies. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `addCdkDependency` <a name="addCdkDependency" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addCdkDependency"></a>

```typescript
public addCdkDependency(modules: ...string[]): void
```

Adds an AWS CDK module dependencies.

###### `modules`<sup>Required</sup> <a name="modules" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.addCdkDependency.parameter.modules"></a>

- *Type:* ...string[]

The list of modules to depend on.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.isConstruct"></a>

```typescript
import { AwsCdkApp } from '@nikovirtala/projen-aws-cdk-app'

AwsCdkApp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.isProject"></a>

```typescript
import { AwsCdkApp } from '@nikovirtala/projen-aws-cdk-app'

AwsCdkApp.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.of"></a>

```typescript
import { AwsCdkApp } from '@nikovirtala/projen-aws-cdk-app'

AwsCdkApp.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@nikovirtala/projen-aws-cdk-app.AwsCdkApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsCdkAppOptions <a name="AwsCdkAppOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions"></a>

AwsCdkAppOptions.

#### Initializer <a name="Initializer" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.Initializer"></a>

```typescript
import { AwsCdkAppOptions } from '@nikovirtala/projen-aws-cdk-app'

const awsCdkAppOptions: AwsCdkAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.app">app</a></code> | <code>string</code> | The command line to execute in order to synthesize the CDK application (language specific). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.cdkCliVersion">cdkCliVersion</a></code> | <code>string</code> | Version range of the AWS CDK CLI to depend on. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.lambdaOptions">lambdaOptions</a></code> | <code>projen.awscdk.LambdaFunctionCommonOptions</code> | Common options for all AWS Lambda functions. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.mise">mise</a></code> | <code>boolean</code> | Create mise.toml with project Node.js version. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.nvm">nvm</a></code> | <code>boolean</code> | Create nvmrc with project Node.js version. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.requireApproval">requireApproval</a></code> | <code>projen.awscdk.ApprovalLevel</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.vitest">vitest</a></code> | <code>boolean</code> | Enable testing with Vitest. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.vitestOptions">vitestOptions</a></code> | <code>@nikovirtala/projen-vitest.VitestOptions</code> | The Vitest configuration (when enabled). |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `app`<sup>Optional</sup> <a name="app" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

The command line to execute in order to synthesize the CDK application (language specific).

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### `cdkCliVersion`<sup>Optional</sup> <a name="cdkCliVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.cdkCliVersion"></a>

```typescript
public readonly cdkCliVersion: string;
```

- *Type:* string
- *Default:* "^2"

Version range of the AWS CDK CLI to depend on.

Can be either a specific version, or an NPM version range.

By default, the latest 2.x version will be installed; you can use this
option to restrict it to a specific version or version range.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `context`<sup>Optional</sup> <a name="context" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `experimentalIntegRunner`<sup>Optional</sup> <a name="experimentalIntegRunner" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.experimentalIntegRunner"></a>

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `github`<sup>Optional</sup> <a name="github" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* projen.awscdk.LambdaFunctionCommonOptions
- *Default:* default options

Common options for all AWS Lambda functions.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `license`<sup>Optional</sup> <a name="license" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package.

Most projects should not use this option.
The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function.

Most projects should not use this option.
The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `mise`<sup>Optional</sup> <a name="mise" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.mise"></a>

```typescript
public readonly mise: boolean;
```

- *Type:* boolean
- *Default:* true

Create mise.toml with project Node.js version.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `nvm`<sup>Optional</sup> <a name="nvm" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.nvm"></a>

```typescript
public readonly nvm: boolean;
```

- *Type:* boolean
- *Default:* false

Create nvmrc with project Node.js version.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `package`<sup>Optional</sup> <a name="package" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `release`<sup>Optional</sup> <a name="release" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* projen.awscdk.ApprovalLevel
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory.

Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `vitest`<sup>Optional</sup> <a name="vitest" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.vitest"></a>

```typescript
public readonly vitest: boolean;
```

- *Type:* boolean
- *Default:* true

Enable testing with Vitest.

---

##### `vitestOptions`<sup>Optional</sup> <a name="vitestOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.vitestOptions"></a>

```typescript
public readonly vitestOptions: VitestOptions;
```

- *Type:* @nikovirtala/projen-vitest.VitestOptions
- *Default:* `@nikovirtala/projen-vitest` defaults

The Vitest configuration (when enabled).

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@nikovirtala/projen-aws-cdk-app.AwsCdkAppOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---



