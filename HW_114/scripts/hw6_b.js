const opening = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../style.css">
    <script src="../scripts/hw6_b.js" defer></script>
  </head>

  <body>
    <main class="popup center">
        <p class="center" id="display">Unable to locate any instances of the letter `

const closing = `.</p>
        <button class="popup" onclick="closeWindow()">Close</button>
    </main>
  </body>
</html>
<!-- closing HTML file. that's all for now, folks! -->`

function showMessage(message, location = "display"){
    document.getElementById(location).innerHTML = message
}

function hideMessage(location = "display"){
    document.getElementById(location).innerHTML = ""
}

function countLetters(text, letter){
    console.log(text)
    console.log(letter)
    let origStr = text
    let str = origStr.toLowerCase()

    let origChar = letter
    let char = origChar.toLowerCase()


    let count = 0

    for (letters in str){
        if(str.charAt(letters) == char){
            count++
        }
    }
    if(count > 0) {
        showMessage(`In the text you provided, the character [ ${letter} ] appears ${count} time(s)`)
    }
    else{
        hideMessage()
        openWindow(char)
    }
}

function getData(){
    let text = document.getElementById("textEntry").value
    let char = document.getElementById("letter").value
    console.log(`text: ${text}, char: ${char}`)
    if(text == "" || char == ""){
        showMessage("Please enter a character and some text to search for that character!")
    }
    else{
        countLetters(text, char)

    }
}

function clearData(){
    document.getElementById("textEntry").value = ""
    document.getElementById("letter").value = ""
}

function closeWindow(){
    window.close()
}


function openWindow(letter){
    const windowFeatures = "left=100,top=100,width=300,height=100, resizeable=false";

    let tubb = window.open("", "tubb", windowFeatures)

    tubb.opener = null
    tubb.focus()

    let pageHTML = opening + letter + closing
    tubb.document.write(pageHTML)
    tubb.document.close()

    window.onfocus = function(){
        tubb.close()
    }

}