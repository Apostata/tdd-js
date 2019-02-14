const request = require('request');

function convertBTC(currency = 'USD', amount = 1) {
  const url = 'https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=1';
  request(url, (error, response, body) => {
    const apiResponse = JSON.parse(body);
    console.info(`1 BTC to USD = ${apiResponse.price}`);
  });
}

module.exports = convertBTC;