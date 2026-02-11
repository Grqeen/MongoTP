const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI);
const connectDb = require('./connectDb/connectDb');

const port = process.env.PORT || 4000;

app.use(express.static('FrontEnd'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/FrontEnd/index.html');
});

const start = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
  });
};

start();