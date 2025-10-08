//by default, displays in the element tagged "display", but you can put a different element there.
function showMessage(message, location = "display"){
    document.getElementById(location).innerHTML = message
}


function hideMessage(location = "display"){
    document.getElementById(location).innerHTML = ""
}


function clearField(){
        document.getElementById("side").value = ""
        hideMessage();
}

function fetchData(){
    console.log("fetching data")
    let side = document.getElementById("side").value
    if(validInput(side)){
        console.log("input valid")
        if(Number(side) > 1 && Number(side) < 11){
            showMessage(drawSquare(Number(side)))
        }
        else{
            showMessage("Please enter a number between 2 and 10")
        }
    }
}

function drawSquare(side){
    console.log("drawing square")
    let square = []
    for(let i = 0; i < side; i++){
        let row = []
        for (let k = 0; k < side; k++){
            if(i == 0 || i == (side-1)){
            row.push("*");
            }
            else{
                if(k == 0 || k == (side-1)){
                    row.push("*")
                }
                else{
                    row.push(" ")
                }
            }
        }
        square.push(row.join(` `))

    }
    console.log(square.join(`\n`))
    return square.join(`\n`)
}

function validInput(input){
    if(input === "" || Number.isNaN(input) || input === null){
        if(input === "" || input === null) {
            console.log("Input is missing") 
        }
        if(Number.isNaN(input)){
            console.log("Input is not a number") 
        }
        return false
    }
    else{
        return true
    }
}



//showMessage(drawSquare(10))
//drawSquare()