"use strict";

// const request = require('request');
var request = require('request-promise-native');

var chalk = require('chalk');

var ora = require('ora'); // spinner


var spinner = ora({
  text: 'Retrieving BitCoin data...',
  color: 'yellow'
});

function convertBTC() {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var url = "https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=".concat(currency, "&amount=").concat(amount);
  spinner.start();
  return request(url).then(function (body) {
    spinner.stop();
    var apiResponse = JSON.parse(body);
    var price = apiResponse.price;
    console.info("".concat(chalk.red(amount), " BTC to ").concat(chalk.cyan(currency), " = ").concat(chalk.yellow(price)));
  }).catch(function () {
    spinner.stop();
    console.info(chalk.red('Deu ruim! Tente novamente mais tarde.'));
  });
}

module.exports = convertBTC;