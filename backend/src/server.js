const express = require('express');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  return res.json({ ok: true });
});
//acessar query params
app.get('/users', (req, res) => {
  return res.json({ ok: req.query.id });
});
//Acessar corpo
app.post('/users', (req, res) => {
  return res.json(req.body);
});
//Acessar path variable
app.put('/users/:id', (req, res) => {
  return res.json({ id: req.params.id });
});

app.listen(3333);
