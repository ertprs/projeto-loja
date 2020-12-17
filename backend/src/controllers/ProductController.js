const moment = require('moment');

const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const product = await connection('product');

    return response.status(200).json(product);
  },

  async show(request, response) {
    const id = request.params.id;

    const product = await connection('product').where({ id }).first();

    if (!product) {
      return response.status(422).json({ error: 'Product not found' });
    }

    return response.status(200).json(product);
  },

  async store(request, response) {
    const { name, description, price, quantity } = request.body;

    const product = {
      name,
      description,
      price,
      quantity,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    };

    const id = await connection('product').insert(product);

    const storedProduct = await connection('product').where({ id }).first();

    return response.status(201).json(storedProduct);
  },

  async update(request, response) {
    const id = request.params.id;
    const productData = request.body;

    productData.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');

    const updated = await connection('product').where({ id }).update(productData);

    if (!updated) {
      return response.status(422).json({ error: 'Product not found' });
    }

    const storedProduct = await connection('product').where({ id }).first();

    return response.status(200).json(storedProduct);
  },

  async delete(request, response) {
    const id = request.params.id;

    const deleted = await connection('product').where({ id }).del();

    if (!deleted) {
      return response.status(422).json({ error: 'Product not found' });
    }

    return response.sendStatus(200);
  }
}