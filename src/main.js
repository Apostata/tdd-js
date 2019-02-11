#!/usr/bin/env node

/*
 comentário acima é ncessário para dizer aos sistemas operacionais unix
  que é para rodar em node
*/

const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version, '-v, --version')
  .parse(process.argv);
