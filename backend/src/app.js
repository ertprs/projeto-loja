const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api', routes);

const port = 3333;
app.listen(port, () => console.log(`\nServer running at http://localhost:${port}\n`));