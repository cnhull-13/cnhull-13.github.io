function showMessage(message, location = "display"){
    document.getElementById(location).innerHTML = message
}

function hideMessage(location = "display"){
    document.getElementById(location).innerHTML = ""
}

function clearInput(){
    document.getElementById("first").value = ""
    document.getElementById("last").value = ""
    document.getElementById("genres").value = "select"

    let inputs = document.getElementsByTagName('input');

    for(i in inputs){
        if(inputs[i].type == "radio" || inputs[i].type == "checkbox"){
            inputs[i].checked = false
        }
    }
}

function test(){
    console.log("im working yahhooooooo")
}

function getInput(){

    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let genre = document.getElementById('genres').value
    let browser = ""
    let age = ""
    let checkboxes = []

    let inputs = document.getElementsByTagName('input');

    for(i in inputs){
        if(inputs[i].type == "radio"){
            if(inputs[i].checked){
                if(inputs[i].name == "Age"){
                    age = inputs[i].value
                }
                if(inputs[i].name == "Browser"){
                    browser = inputs[i].value
                }
            }
        }
        if(inputs[i].type == "checkbox"){
            if(inputs[i].checked){
                checkboxes.push(inputs[i].value)
            }
        }
    }


    if(first == ""){
        showMessage("Please enter your first name!")
    }else if(last == ""){
        showMessage("Please enter your last name!")
    }else if(age == ""){
        showMessage("Please select your age range!")
    }else if(browser == ""){
        showMessage("Please select your current browser!")
    }       else if(checkboxes.length == 0){
        showMessage("Please select which browsers you have used before!")
    }else if(genre == "select"){
        showMessage("Please select your favorite genre!")
    }else{
        let used = `\t-` + checkboxes.join(`\n\t-`)

        let printer = `Your name is ${first} ${last}, and you are ${age} years old.
The browser you are currently using is ${browser}.
You said that you've used the following browser(s): 
${used}
Your favorite types of movies are ${genre}.`
        console.log("something")
        console.log(printer)
        showMessage(printer)
    }

}