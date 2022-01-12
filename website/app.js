/* Global Variables */
// This for store openweathermap api
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=`;
// this for store my api key 
const apiKey = ',&units=imperial&appid=2c177283fb4a824a7069d42135798de9';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
let data = {};

// GET route This get for get the temperature from openweathermap api 
const getData = async (baseUrl, zip, apiKey) => {
  // here i waiting to get the data from opeweathermap api 
  const req = await fetch(baseUrl + zip + apiKey);

  // after get the date 
  // I will run this code 
  try {
    // Transform into JSON
    const newData = await req.json();
    // here to set temp property to data object = the data i recieved
    data.temp = newData.main.temp;
    // here to set the date property to data object = the date 
    data.date = newDate;
    //here to set userRes property to data object = what the user write in textarea 
    data.userRes = document.querySelector('#feelings').value;

    // this for if there any error, print it in console
  } catch (error) {
    console.log('error', error);
  }
}

// POST route for send data to api 
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  // Transform into JSON
  try {
    const newData = await res.json();

    // this for if there any error, print it in console
  } catch (error) {
    console.log('error', error);
  }
}

// get route this for updateUl the app
const updataUl = async (url) => {
  const req = await fetch(url);
  try {
    // Transform into JSON
    const newData = await req.json();
    // update the UL
    // set value of temp to app 
    document.querySelector('#temp').innerHTML = `<span>This is temperature:</span> ${newData.temp}.`;
    // set the date to app
    document.querySelector('#date').innerHTML = `<span>The date:</span> ${newData.date}.`;
    // set the feeling to app
    document.querySelector('#content').innerHTML = `<span>This is Your feeling today:</span> ${newData.userRes}.`;
  } catch (error) {
    console.log('error', error);
  }
}
// add event after clicking on generate button 
document.querySelector('#generate').addEventListener('click', toDo);

// this call function for used in event on clicking generate button
function toDo() {
  // this for store the value of zip input element 
  const zip = document.querySelector('#zip').value;

  // use get route
  getData(baseUrl, zip, apiKey)
    // after get date ,post data for api
    .then(() => {
      postData('/all', data);
    })
    // then update app to add the date to it 
    .then(() => {
      updataUl('/all')
    })
};