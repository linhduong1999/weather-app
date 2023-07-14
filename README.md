# Weather App

This Weather App is a React-based web application that allows users to view weather information for different cities. It utilizes the OpenWeatherMap API to fetch and display weather data.

## Installation

- Clone the repository: git clone [repository-url]
- Navigate to the project directory: cd weather-app
- Add ".env" file the root of the project
- Install dependencies: npm install
- Start the development server: npm start
- Open the application in your browser: http://localhost:5173
- Login with any valid email with a password of "test1234".

## Features

- Display weather summary of cities that have been added, including current temperature, expected high and low temperatures, and overcast state.
- Allow users to add or remove a city.
- Detail screen for selected city showing a 5-day forecast with day of the week, high and low temperatures, and overcast state.
- Graphical representation of high and low temperatures on a graph.
- Settings screen to toggle between metric (Celcius) and imperial (Fahrenheit) temperature formats.
- Login screen with email and password authentication. Each user has a separate session to store app - state.
- Logout functionality to return to the login screen.
