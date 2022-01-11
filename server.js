// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express')
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
// this varible for port
const port = 8000;
// for server
const server = app.listen(port, () => {
  console.log(`server is running on localhost: ${port}`);
})

// POST Route
app.post('/all', postData);
// this function i used in post route 
function postData(req, res) {
  // set temp property to projectData object 
  projectData.temp = (req.body.temp);
  // set date property to projectData object 
  projectData.date = (req.body.date);
  // set userRse property to projectData object 
  projectData.userRes = (req.body.userRes);
}

// GET Route 
app.get('/all', updataUl);
// this function i use in Get route 
function updataUl(req, res) {
  // send data to '/all'
  res.send(projectData);
}