const fetch = require('isomorphic-fetch');
const apiKey = require('../../config/local.env.js').quandlApiKey;

exports.index = (req, res) => {
  return;
};

exports.show = (req, res) => {
  const tickerSymbol = req.params.tickerSymbol;
  if (!tickerSymbol) {
    res.satus(400).send('Bad request. Please include ticker symbol');
  }
  const domain = 'https://www.quandl.com/';
  const path = `api/v3/datasets/WIKI/${tickerSymbol}/data.json`;
  const query = `?column_index=4&order=asc&api_key=${apiKey}`;

  return fetch(domain + path + query).then(response => {
    if (response.status >= 400) {
      throw new Error(`Bad response received: ${response.status}`);
    }
    return response.json();
  })
  .then(json => {
    return res.send(json);
  })
  .catch(err => res.send(err));
};
