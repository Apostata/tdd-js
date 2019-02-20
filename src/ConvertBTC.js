// const request = require('request');
const request = require('request-promise-native');
const chalk = require('chalk');
const ora = require('ora'); // spinner

const spinner = ora({
  text: 'Retrieving BitCoin data...',
  color: 'yellow',
});

function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  spinner.start();
  return request(url)
    .then((body) => {
      spinner.stop();
      const apiResponse = JSON.parse(body);
      const { price } = apiResponse;
      console.info(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(price)}`);
    })
    .catch(() => {
      spinner.stop();
      console.info(chalk.red('Deu ruim! Tente novamente mais tarde.'));
    });
}

module.exports = convertBTC;
