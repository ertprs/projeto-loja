const knex = require('knex');

const config = require('./connectionConfig');

const connection = knex(config);

module.exports = connection;