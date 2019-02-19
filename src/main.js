#!/usr/bin/env node

/*
 comentário acima é ncessário para dizer aos sistemas operacionais unix
  que é para rodar em node
*/

const program = require('commander');
const pkg = require('../package.json');
const ConvertBTC = require('./ConvertBTC');

program
  .version(pkg.version)
  .description('Convert Bitcoin to any currency defined')
  .option('-C, --currency <currency>', 'Currency to be converted. Default(USD)')
  .option('-A, --amount <amount>', 'Volume in bitcon to be converted. Default(1)')
  .parse(process.argv);
const { currency, amount } = program;

ConvertBTC(currency, amount);
