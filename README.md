# pmrun

**pmrun** is a CLI tool that detects which package manager your Node.js project is using (based on lockfiles) and forwards commands to the appropriate package manager like `pnpm`, `yarn`, or `npm`.

## Installation

You can install **pmrun** globally using npm:

```bash
npm install -g pmrun
```

## Usage

Use `pmrun` just like you would use any package manager command. It will detect the correct package manager based on the lockfile and forward the command.

```bash
pmrun install
```

This will run yarn install, pnpm install, or npm install depending on which lockfile is present in your project.

Example

- To install dependencies:

```bash
pmrun install
```

- To add a package:

```bash
pmrun add <package-name>
```

- To remove a package:

```bash
pmrun remove <package-name>
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.
