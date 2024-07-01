#!/usr/bin/env node

import { execSync } from 'child_process';
import { program } from 'commander';
import { existsSync } from 'fs';

program
  .version('1.0.0')
  .arguments('<cmd> [args...]')
  .action((cmd, args) => {
    let packageManager;

    if (existsSync('yarn.lock')) {
      packageManager = 'yarn';
    } else if (existsSync('pnpm-lock.yaml')) {
      packageManager = 'pnpm';
    } else if (existsSync('package-lock.json')) {
      packageManager = 'npm';
    } else {
      console.error('No lockfile found. Cannot determine package manager.');
      process.exit(1);
    }

    const fullCommand = `${packageManager} ${cmd} ${args.join(' ')}`;

    try {
      execSync(fullCommand, { stdio: 'inherit' });
    } catch (error) {
      console.error(`Error executing command: ${error.message}`);
    }
  });

program.parse(process.argv);
