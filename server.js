const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let pedidos = [];
let id = 1;

app.post('/pedidos', (req, res) => {
  const pedido = { id: id++, ...req.body };
  pedidos.push(pedido);
  res.status(201).send(pedido);
});

app.get('/pedidos', (req, res) => {
  res.send({ pedidos });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
