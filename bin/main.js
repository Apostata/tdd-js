#!/usr/bin/env node

/*
 comentário acima é ncessário para dizer aos sistemas operacionais unix
  que é para rodar em node
*/
"use strict";

var program = require('commander');

var pkg = require('../package.json');

var ConvertBTC = require('./ConvertBTC');

program.version(pkg.version).description('Convert Bitcoin to any currency defined').option('-C, --currency <currency>', 'Currency to be converted. Default(USD)').option('-A, --amount <amount>', 'Volume in bitcon to be converted. Default(1)').parse(process.argv);
var currency = program.currency,
    amount = program.amount;
console.log(ConvertBTC(currency, amount));