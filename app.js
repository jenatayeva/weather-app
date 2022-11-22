const request = require('request');
require('dotenv').config();

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.APP_ID}'

request({ url: url }, (error, response) => {
  const data =  JSON.parse(response.body)
  console.log(data)
})