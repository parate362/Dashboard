const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors');       
const path = require('path')
const fileUpload = require('express-fileupload');
const Router = express.Router()


const port = process.env.PORT || 1221
require('dotenv').config()
require('./src/db-config/connection')
app.use(express.json()); // Parse JSON requests



app.use(bodyParser.json())
app.use(express.json({ extended: false}))
app.use(fileUpload())

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


// cron job
const {closeCampaign} = require('./src/controller/campaign');
closeCampaign();

fs.readdirSync(path.join(__dirname,'/src/routes/')).forEach(function(fileName) {
    if(fileName === 'index.js' || fileName.substr(fileName.lastIndexOf('.')) !== 'js'){
        const name = fileName.substr(0,fileName.indexOf('.'))
        require('./src/routes/' + name)(app,Router)
    }
})

                   
app.listen(port, 'localhost', () => {
    console.log(`listening on server http://localhost:${port}`);
})