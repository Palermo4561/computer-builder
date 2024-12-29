require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.SERVER_PORT || 5000; 

// temporary function to test API connection 
// will eventually be put in a "routes" directory
app.get('/hello_world', (req, res) => {
  res.status(200).json({ msg: "hello from the computer-builder API!!" })
});

async function startServer() {
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}

startServer();