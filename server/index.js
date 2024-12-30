require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// set up the app
const app = express();
app.use(cors());
app.use(express.json());

// api routes
app.use('/api', routes);

// just the base server address
app.get('/', (req, res) => {
  res.status(404).send("<h1>Please specify path with \'/api\'</h1>");
});

// assign port and start server
const port = process.env.SERVER_PORT || 5000;
async function startServer() {
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}
startServer();
