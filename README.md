# Weather-Journal App Project

## Table of Contents

- [createServer](#createServer)
- [getRoute](#getRoute)
- [postRoute](#postRoute)
- [updateUl](#updateUl)
- [addEventListener()](<#addEventListener()>)

## createServer

I Create server using listen and port and arrow function.

## getRoute

I Create GET Route In Client side for get temperature from openweathermap api then store this temperature, date and the content in data object.

## postRoute

I Create POST Route in Client Side to post data to `localhost:8000/all` and create POST Route in server side to set data from api to projectData Object.

## updateUl

after creating POST Route in client side create async function to update the ul with a new data by select elements by jquerySelector( ) .then updata it with innerHTML.

## addEventListener( )

I add event after clicking on element with id equal 'generate' this event excute all Get and post route and updataUl

1 - GET route

2 - POST Route server side

3 - POST Route client side

4 - updateUl

5 - addEventListener
