// const request = require('request');
const request = require('request-promise-native');

function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;
  return request(url)
    .then((body) => {
      const apiResponse = JSON.parse(body);
      const { price } = apiResponse;
      console.info(`${amount} BTC to ${currency} = ${price}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = convertBTC;
