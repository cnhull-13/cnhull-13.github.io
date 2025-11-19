function showMessage(message, location = "display"){
    document.getElementById(location).innerHTML = message
}

function hideMessage(location = "display"){
    document.getElementById(location).innerHTML = ""
}

function fontSize(size){
    document.getElementById("styleText").style.fontSize = `${Number(size)}px`
}

function backgroundColor(color){
    document.getElementById("styleText").style.backgroundColor = color
}

function lineHeight(height){
    document.getElementById("styleText").style.lineHeight = `${Number(height)}rem`
}

function underline(){
    if(document.getElementById("styleText").style.textDecoration == "underline"){
        document.getElementById("styleText").style.textDecoration = "none"
    }else{
        document.getElementById("styleText").style.textDecoration = "underline"
    }
}

function bold(){
    console.log("A")
    if(document.getElementById("styleText").style.fontWeight == "bold"){
        document.getElementById("styleText").style.fontWeight = "normal"
    }
    else{
        document.getElementById("styleText").style.fontWeight = "bold"
    }
}

function italic(){
    if(document.getElementById("styleText").style.fontStyle == "italic"){
        document.getElementById("styleText").style.fontStyle = "normal"
    }
    else{
        document.getElementById("styleText").style.fontStyle = "italic"
    }
    
}

function save(){
    let cookie1 = `name=${document.getElementById("name").value};path=/`
    let cookie2 = `username=${document.getElementById("username").value};path=/`

    document.cookie = cookie1
    document.cookie = cookie2

    console.log(`Here's your cookie jar: ${document.cookie}`)
}

function updatePage(){
        console.log(`I've got some cookies...maybe. Here they are: ${document.cookie}`)
        let cookies = document.cookie
        console.log(`I've got some cookies...maybe. Here they are: ${document.cookie}`)
        if(cookies !== null){
            //showMessage("Welcome back!")
            parseCookies()
        }
}

function parseCookies(){
    let cookies = document.cookie
    let name = ""
    let username = ""
    let arr = cookies.split(`;`)
    console.log(arr)
    for(items in arr){
        arr[items] = arr[items].split(`=`)
        if(arr[items].length > 1){
            if(arr[items][0]==`name`){
                name = arr[items][1]
            }
            if(String(arr[items][0]).trim()==`username`){
                username = arr[items][1]
            }
        }
    }
        document.getElementById("cookieJar").innerHTML = `User: ${username}\nWelcome back, ${name}!\nCan I interest you in a cookie?`

    //showMessage(`User: ${username}\nWelcome back, ${name}!`)
}