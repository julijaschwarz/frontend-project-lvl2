#!/usr/bin/env node

import program from 'commander';

program
  .version('0.0.1', '-v, --vers', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action(function (filepath1, filepath2) {

  })
  .option('-f, --format [type]', 'output format');

program.parse(process.argv);
