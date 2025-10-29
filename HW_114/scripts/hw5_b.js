function showMessage(message, location = "display"){
    document.getElementById(location).innerHTML = message
}

function hideMessage(location = "display"){
    document.getElementById(location).innerHTML = ""
}

function getData(){
    console.log("I'm getting the data! Or I will be soon!")
}

function clearData(){
    console.log("I'm getting the data! Or I will be soon!")
}