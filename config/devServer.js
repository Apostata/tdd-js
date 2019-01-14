const path = require('path');

module.exports = {
  contentBase: path.join(__dirname, '../dist'), // path para pegar os arquivos do servidor;
  compress: true, // enable gzip
  port: 9999,
  hot: true, // hot reload
  open: true, // initialize after bundle,
  overlay: true, // show errors overlay on screen
};
