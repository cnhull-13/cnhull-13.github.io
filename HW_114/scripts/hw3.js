function showMessage(message){
    document.getElementById("display").innerHTML = message
}

function hideMessage(){
    document.getElementById("display").innerHTML = ""
}


function calcGrade(){
    let hw = document.getElementById("homework").value
    let mid = document.getElementById("midterm").value
    let final = document.getElementById("final").value
    let part = document.getElementById("participation").value

    if(hw == "" || mid == "" || final == "" || part == ""){
        showMessage("Error: empty field(s) or non-numeric input\nPlease enter one number in each field.")
    }
    else if(Number.isNaN(hw) || Number.isNaN(mid) || Number.isNaN(final) || Number.isNaN(part)){
        showMessage("Error: non-numeric input\nPlease enter only numbers")
    }
    else{
        hw = parseFloat(hw)
        mid = parseFloat(mid)
        final = parseFloat(final)
        part = parseFloat(part)
        if(invalidRange(hw) || invalidRange(mid) || invalidRange(final) || invalidRange(part)){
            showMessage("Error: values outside of accepted range\nPlease enter values between 0 and 100")
        }
        else{
            output = (hw * 0.5) + (mid * 0.2) + (final * 0.2) + (part * 0.1)
            document.getElementById("finalGrade").innerHTML = output.toFixed(0)
            finalGrade = getLetter(output)
            document.getElementById("display").innerHTML = `${finalGrade.letter}\n${finalGrade.message}`

        }
    }
}

function clearGrades(){
    document.getElementById("homework").value = ""
    document.getElementById("midterm").value = ""
    document.getElementById("final").value = ""
    document.getElementById("participation").value = ""
    document.getElementById("finalGrade").innerHTML = ""
    hideMessage();
}




function invalidRange(val){
    if(0 <= val && val <= 100){
        return false
    }
    else{
        return true
    }
}

function letterGrade(letter, message){
    this.letter = letter
    this.message = message
}

function getLetter(grade){
    if(grade < 60){
        return new letterGrade("Final Letter Grade: F", "Student must retake this course.")
    }
    else if( grade < 70){
        return new letterGrade("Final Letter Grade: D", "Student must retake this course.")
    }
    else if( grade < 80){
        return new letterGrade("Final Letter Grade: C", "")
    }
    else if( grade < 90){
        return new letterGrade("Final Letter Grade: B", "Good work!")
    }
    else{
        return new letterGrade("Final Letter Grade: A", "Great work!")
    }
}




function validInput(input){
    console.log(input)
    if(input == "" || Number.isNaN(input)){
        return false
    }
    else{
        let check = parseFloat(input)
        if(check >= 0){
            return true
        }
        else{
            return false
        }
    }
}

function ids(number){
    this.display = `item${number}Display`
    this.id = `item${number}`
}

function item(number, quantity){
    this.number = parseFloat(number)
    this.display = `item${number}Display`
    this.id = `item${number}`

    this.valid = validInput(quantity)
    if(this.valid == true){
        this.quantity = Number((parseFloat(quantity).toFixed(0)))
    }else{
        this.quantity = 0
    }
    switch(this.number){
        case 1:
            this.price = 20.99
            break
        case 2:
            this.price = 12.75
            break
        case 3:
            this.price = 9.95
            break
        case 4:
            this.price = 35.89
            break
        default:
            this.price = 0
    }
    this.net = Number((this.quantity * this.price).toFixed(2))
}

function calculateEarnings(){
    console.log("calculating earnings")
    let item1 = new item(1, document.getElementById("item1").value)
    let item2 = new item(2, document.getElementById("item2").value)
    let item3 = new item(3, document.getElementById("item3").value)
    let item4 = new item(4, document.getElementById("item4").value)

    let items = [item1, item2, item3, item4]

    if(item1.valid && item2.valid && item3.valid && item4.valid){
        hideMessage()
        let total = 0
        items.forEach(element => {
            document.getElementById(element.display).value = "$" + element.net.toFixed(2)
            total = total + element.net
        });
            document.getElementById("total").value = "$" + total.toFixed(2)
            let earnings = 250 + (total * 0.09)
            document.getElementById("earnings").value = "$" + earnings.toFixed(2)

    }
    else{
        showMessage("Positive numerical values are required; please enter one number in each field.")
    }
}

function clearQuantities(){
    items = [new item(1), new item(2), new item(3), new item(4)]
        items.forEach(element => {
            document.getElementById(element.id).value = ""
            document.getElementById(element.display).value = ""
        });
        document.getElementById("total").value = ""
        document.getElementById("earnings").value = ""
    hideMessage();
}

let question = new product()

function product(){
    this.num1 = Math.floor(Math.random()*10)
    this.num2 = Math.floor(Math.random()*10)
    this.answer = this.num1 * this.num2
    this.solved = false
    this.attempts = 0
    console.log(this.num1, this.num2, this.answer)
}

function generateNumber(){
    hideMessage()
    clearAnswer()
    question = new product()
    document.getElementById("num1").innerHTML = question.num1
    document.getElementById("num2").innerHTML = question.num2
}

//TODO: replayability
let solved = 0
function checkAnswer(){
    answer = document.getElementById("answer").value
    if(answer == "" || Number.isNaN(answer)){
            showMessage("The answer has to be a number!")
    }
    else{
        if(answer == question.answer){
            showMessage(`Correct! Good Job.`)
            if(!question.solved){
                solved++
                question.solved = true
                document.getElementById("score").innerHTML = "Problems Solved: " + solved

            }
            console.log(solved)
        }
        else{
            question.attempts++
            showMessage("Incorrect. Try Again!")
            clearAnswer()
        }
    }
}

function clearAnswer(){
        document.getElementById("answer").value = ""

}


function test(){
    console.log("this button is working!")
}
