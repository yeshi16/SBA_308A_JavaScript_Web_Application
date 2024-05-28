# Fruit Nutrition App

## Overview

The Fruit Nutrition App is a web application that provides information about various fruits, including their nutritional content. It utilizes the FruityVice API to fetch data about different fruits and presents it to the user in an organized manner. To handle CORS issues, the application uses the http://cors-anywhere.herokuapp.com proxy server.

## Fetching Data

The application fetches data from the FruityVice API by making HTTP requests using the Fetch API. To mitigate CORS issues, the API URL is prefixed with http://cors-anywhere.herokuapp.com.

## CORS Issue Resolution

In case of 404 errors due to CORS issues, users can visit http://cors-anywhere.herokuapp.com/corsdemo and request temporary access to the demo server. This allows users to bypass CORS restrictions and access the application seamlessly.

## User Interaction

Users can interact with the application through various features such as looking up family, genre and order for fruits by name and can have each fruit nuttrion information. These features enable users to explore and discover information about different fruits.

## Asynchronous Operations

The application utilizes Promises and async/await syntax to handle asynchronous operations effectively, ensuring that data is fetched and displayed in the correct order. This asynchronous approach enhances the responsiveness of the application.
