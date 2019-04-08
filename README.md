# Shipwell Demo App

This is the demo app that will find the directions from the starting location to the ending location.
The user's company address will also be used to pinpoint a marker onto the map.


## Installation and run Dev Server

* `git clone github.com/jarkyll/Shipwell.git`
* cd src
* npm install
* npm run start
* visit `http://localhost:8080`

## Build the App and Run built files

* npm install
* npm run build
* npm run server
* visit `http://localhost:8080`

# Routes
* `/home` is the base url which contains the input fields to search the directions to
* `/maps` is the url that will display the map if there is a starting and ending geolocation in redux.
