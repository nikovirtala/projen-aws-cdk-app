# Technology Stack

## Build System & Package Management

- **Projen**: Project configuration and build orchestration
- **PNPM**: Package manager (version 10)
- **JSII**: Multi-language library compilation
- **TypeScript**: 5.8.3

## Runtime & Execution

- **Node.js**: >= 22.16.0 (specified in mise.toml)
- **tsx**: TypeScript execution (replaces ts-node)
- **ES Modules**: Modern module system

## Testing & Quality

- **Vitest**: Test runner with coverage (v3)
- **Biome**: Formatting and linting
- **TypeScript strict mode**: Enabled

## AWS CDK

- **aws-cdk-lib**: 2.207.0+
- **constructs**: ^10.4.2

## Common Commands

### Development

```bash
# Install dependencies
pnpm install

# Build the project
pj build

# Run tests
pj test

# Run tests in watch mode
pj test:watch

# Update test snapshots
pj test:update
```

### Code Quality

```bash
# Format and lint code
pj biome

# Compile TypeScript
pj compile
```

### Projen Management

```bash
# Regenerate project files
pj

# Upgrade dependencies
pj upgrade

# Package for distribution
pj package
```

## Code Style Rules

- **Indentation**: 4 spaces
- **Line width**: 120 characters
- **Quote style**: Double quotes
- **Module resolution**: NodeNext
- **Strict TypeScript**: All strict options enabled
