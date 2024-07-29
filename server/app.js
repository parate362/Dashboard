const express = require('express');

const fs = require('fs');
const path = require('path')
const cors = require('cors');

const router =express.Router();
require('dotenv').config(); 
const app = express();

// Connect tonpm MongoDB


// Middleware
app.use(express.json()); // Parse JSON requests
const allowedOrigins = ["http://localhost:3000","https://dashboard-client-plum.vercel.app"];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

fs.readdirSync(path.join(__dirname,'/src/routes/')).forEach(function(fileName) {
  if(fileName === 'index.js' || fileName.substr(fileName.lastIndexOf('.')) !== 'js'){
      const name = fileName.substr(0,fileName.indexOf('.'))
      require('./src/routes/' + name)(app,router)
  }
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ message: 'Internal Server Error' }); // Respond with a 500 status code
});

// Start server
app.listen(port, 'localhost', () => {
  console.log(`listening on server http://localhost:${port}`);
})
