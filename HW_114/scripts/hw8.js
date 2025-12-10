const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

function showMessage(message, location = "display"){
    document.getElementById(location).innerHTML = message
}

function hideMessage(location = "display"){
    document.getElementById(location).innerHTML = ""
}



function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunction(this);
  }
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;

}




function fetchKanto(){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json()).then(allpokemon => console.log(allpokemon))
    }

      
fetchKanto();