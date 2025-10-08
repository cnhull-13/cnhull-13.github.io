//by default, displays in the element tagged "display", but you can put a different element there.
function showMessage(message, location = "display"){
    document.getElementById(location).innerHTML = message
}


function hideMessage(location = "display"){
    document.getElementById(location).innerHTML = ""
}

function examples(){
    // to change the example values, just change the numbers between the brackets
    // [lower value, higher value, increment]
    let inputFor = [5, 25, 4]
    let inputWhile = [3, 18, 3]

    let snail = [4, 200, 8]

    let outputFor = getData(inputFor[0], inputFor[1], inputFor[2], "for")
    let outputWhile = getData(inputWhile[0], inputWhile[1], inputWhile[2], "while")

    showMessage(
        `${formatOutput(outputFor)}

        ${formatOutput(outputWhile)}`,
         "exampleDisplay")
}

//helper function to format numbers with proper grammar
function nth(number){
    let temp = number
    while(temp > 10){
        if(temp == 11 || temp == 12){
            return `${number}th`
        }
        temp = temp % 10
    }
    if(temp === 1)
        return `${number}st`
    else if(temp === 2)
        return `${number}nd`
    else if(temp === 3)
        return `${number}rd`
    else
        return `${number}th`
}

//expects a problem as input; helper for printing output
function formatOutput(obj){
    return `The sum of every ${nth(obj.increment)} number from ${obj.lower} to ${obj.upper} is ${obj.sum.toLocaleString()} 
        ${obj.displaySum}
        The product of every ${nth(obj.increment)} number from ${obj.lower} to ${obj.upper} is ${obj.product.toLocaleString()} 
        ${obj.displayProduct}`
}

function fetchInput(){
    let lower = document.getElementById("lower").value
    let upper = document.getElementById("upper").value
    let increment = document.getElementById("increment").value

    let output = getData(lower, upper, increment)

    if(typeof(output)!=="undefined"){
        showMessage(`${formatOutput(output)}`)
    }
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


function getData(lower, upper, increment, version = "for"){

    if(validInput(lower) && validInput(upper) && validInput(increment)){
        if((lower <= upper) && (increment > 0)){
            return new problem(lower, upper, increment, version)
        } 
        else{
            showMessage(`Please make sure that the Lower value is lower than the Higher value, and that your increment is greater than 0!`)
        }
    }
    else{
        showMessage("There's something wrong with your input; please enter a number in each field.")
    }
}



class problem {
    constructor(lower, upper, increment, version = "for") {
/*
    console.log(`Creating problem...
                    lower: ${lower}, upper: ${upper}, increment: ${increment}
                    lower: ${typeof(lower)}, upper: ${typeof(upper)}, increment: ${typeof(increment)}`)
*/
        this.lower = Number(lower)
        this.upper = Number(upper)
        this.increment = Number(increment)
        this.numList = []
        this.displaySum = []
        this.displayProduct = []
        this.product = this.lower
        this.sum = this.lower

        if(version == "for"){
            this.forVersion()
        }
        else{
            this.whileVersion()
        }

        this.displaySum.push(` = ${this.sum.toLocaleString()}`)
        this.displaySum = this.displaySum.join("")

        this.displayProduct.push(` = ${this.product.toLocaleString()}`)
        this.displayProduct = this.displayProduct.join("")

    }

    guts(i){
            this.numList.push(i)
            if(i !== this.lower){
                this.sum += i
                this.product *= i
            }

            this.displaySum.push(i.toLocaleString())
            this.displayProduct.push(i.toLocaleString())

            if((i + this.increment) <= this.upper){
                this.displaySum.push(" + ")
                this.displayProduct.push(" * ")
            }
    }

    forVersion(){
        for(let i = this.lower; i <= this.upper; i += this.increment){
            this.guts(i)
        }
    }

    whileVersion(){
        let i = this.lower
        while(i <= this.upper){
            this.guts(i)
            i += this.increment
        }
    }
}

function test(){
    console.log("this button is working!")
}

examples()

