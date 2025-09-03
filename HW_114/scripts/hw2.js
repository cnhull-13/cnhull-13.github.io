function exchange(){
    let usd = document.getElementById("usd").value
    if(usd == "" || isNaN(usd)){
        document.getElementById("exchError").style.visibility = "visible"
        clearCurrency();
    }
    else{
        document.getElementById("exchError").style.visibility = "hidden"
        usd = parseFloat(usd)
        let eur = (usd * 0.92).toFixed(2)
        let cad = (usd * 1.38).toFixed(2)
        let hkd = (usd * 7.81).toFixed(2)
        let jpy = (usd * 156.73).toFixed(2)
        let mxn = (usd * 18.41).toFixed(2)

        document.getElementById("eur").innerHTML = "EUR € " + eur
        document.getElementById("cad").innerHTML = "CAD $ " + cad
        document.getElementById("hkd").innerHTML = "HK 元 " + hkd
        document.getElementById("jpy").innerHTML = "JPY ¥ " + jpy
        document.getElementById("mxn").innerHTML = "MXN $ " + mxn
    }
}

function clearCurrency(){
        document.getElementById("eur").innerHTML = ""
        document.getElementById("cad").innerHTML = ""
        document.getElementById("hkd").innerHTML = ""
        document.getElementById("jpy").innerHTML = ""
        document.getElementById("mxn").innerHTML = ""
        document.getElementById("usd").value = ""
}


function redStyle(id){
        if(document.getElementById(id) != null){
        document.getElementById(id).style.color = "red"
        document.getElementById(id).style.fontWeight = "bold"
        document.getElementById(id).style.fontFamily = "Times New Roman"
    }
}

function blueStyle(id){
    if(document.getElementById(id) != null){
        document.getElementById(id).style.color = "blue"
        document.getElementById(id).style.fontFamily = "Arial"
    }
}

function greenStyle(id){
    if(document.getElementById(id) != null){
    document.getElementById(id).style.color = "green"
    document.getElementById(id).style.fontWeight = "bold"
    document.getElementById(id).style.fontFamily = "Impact"
    document.getElementById(id).style.fontStyle = "Italic"
    }
}

function clearData(){
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("num3").value = ""
    document.getElementById("outputArea").value = ""
}

function getData(){
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    let z = document.getElementById("num3").value;

    if(x == "" || y == "" || z == ""){
        document.getElementById("outputArea").innerHTML = "Please enter one number into each box"
    }
    else if(isNaN(x) || isNaN(y) || isNaN(z)){
        document.getElementById("outputArea").innerHTML = "Please enter one number into each box"
    }
    else{
        x = parseFloat(x)
        y = parseFloat(y)
        z = parseFloat(z)

        let sum = getSum(x, y, z)
        let avg = getAverage(x, y, z).toFixed(2)
        let prod = getProduct(x, y, z).toFixed(2)
        let min = Math.min(x, y, z)
        let max = Math.max(x, y, z)
        let str = `Entered numbers: ${x}, ${y}, ${z} 
            Sum: ${sum}
            Average: ${avg}
            Product: ${prod}
            Minimum: ${min} 
            Maximum: ${max}` 

        document.getElementById("outputArea").innerHTML = str
        }
    
}

function getSum(x, y, z){
    return x + y + z
}

function getAverage(x, y, z){
    return (x + y + z)/3
}

function getProduct(x, y, z){
    return x * y * z
}


