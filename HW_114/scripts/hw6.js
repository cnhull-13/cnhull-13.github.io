function showMessage(message, location = "display"){
    document.getElementById(location).innerHTML = message
}

function hideMessage(location = "display"){
    document.getElementById(location).innerHTML = ""
}


function validInput(bool, val, msg){
    this.valid = bool
    this.value = val
    this.msg = msg
}

function calcOjb(input){
    this.num = parseFloat(input)
    this.rounded = Math.round(this.num)
    this.sqrt = Math.round(Math.sqrt(this.num))
    this.toOne = Math.round(this.num*100)/100
    this.toTwo = Math.round(this.num*1000)/1000
    this.toThree = Math.round(this.num*10000)/10000
    console.log()
}


function validateInput(input){
    let valid = true
    let msg = `Thank you for your input.`
    let num = parseFloat(input) * 1

    let arr = input.split(".")
    let flag = false
    if(arr.length > 1){
        flag = true
    }

    if(input == ""){
        valid = false
        msg = `Input cannot be empty! Please enter a number.`
    }
    else if(isNaN(num)){
        valid = false
        msg = `That's not a number! Please enter a number.`
    }
    else{
        let test = num.toString().split(".")
        if(test.length < 2){
            if(flag){
                valid = false
                msg = `Trailing zeroes don't count! Please enter a number with four decimal places.`
            }
            else{
                valid = false
                msg = `There aren't any decimals! Please enter a number with four decimal places.`
            }

        }
        else{
            if(test[1].length < 4){
                valid = false
                msg = `There aren't enough decimals! Please enter a number with four decimal places.`
            }
        }
    }
    return new validInput(valid, input, msg)
}

function getData(){
    let input = document.getElementById("num").value
    let cur = validateInput(input)

    if(!cur.valid){
        showMessage(`You entered: ${cur.value}\n${cur.msg}`)
    }
    else{
        let calc = new calcOjb(cur.value)
        let msg = []
        msg.push(`You entered: ${calc.num}`)
        msg.push(`Rounded to the nearest integer: ${calc.rounded}`)
        msg.push(`Square root, rounded to the nearest integer: ${calc.sqrt}`)
        msg.push(`Rounded to the nearest tenth: ${calc.toOne.toFixed(1)}`)
        msg.push(`Rounded to the nearest hundredth: ${calc.toTwo.toFixed(2)}`)
        msg.push(`Rounded to the nearest thousandth: ${calc.toThree.toFixed(3)}`)
        showMessage(msg.join(`\n`))
    }


}

function clearData(){
    document.getElementById("num").value = ""
    hideMessage()
}
