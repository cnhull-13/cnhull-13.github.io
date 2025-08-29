/*
Base geolocation/error handling code from W3 Schools
https://www.w3schools.com/html/html5_geolocation.asp

Base map implementation code from Nolin Naidoo's example
https://codepen.io/nolindnaidoo/pen/OgVXro

*/
const x = document.getElementById("demo");
let lat, long;

function getLocation() {
  console.log("getting location");
  x.innerHTML = "Getting location, please wait..."
  if (navigator.geolocation) {
    
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  
}

function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  console.log("passing");
    sonic(lat, long);
}

function sonic(lat, long){
  console.log("sonic");
  map.panTo([lat, long]);
  var here = L.marker([lat, long], {
  draggable: true,
  title: "",
  opacity: 0.75,
});
  here.addTo(map).bindPopup("You are here!").openPopup();
  console.log("map should be panned");
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}



// Initialize the map and assign it to a variable for later use
// there's a few ways to declare a VARIABLE in javascript.
// you might also see people declaring variables using `const` and `let`
var map = L.map("map", {
  // Set latitude and longitude of the map center (required)
  center: [37.533112, -122.335403],
  // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
  zoom: 16,
});

// Create a Tile Layer and add it to the map
var tiles = new L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: "15",
  }
).addTo(map);

var marker = L.marker([37.533112, -122.335403], {
  draggable: true,
  title: "",
  opacity: 0.75,
});


marker.addTo(map).bindPopup("I'm thinking...").openPopup();
getLocation();

console.log("done");
