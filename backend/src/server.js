const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const app = express();

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-vnaya.mongodb.net/omnistack9?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
app.use(cors());
app.use(express.json());
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads')),
);
app.use(routes);

app.listen(3333);
