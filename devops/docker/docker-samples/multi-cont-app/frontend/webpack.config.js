const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv({
      path: '../env/frontend.env' // default is .env
    })
  ],
};