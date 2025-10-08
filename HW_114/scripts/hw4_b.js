//by default, displays in the element tagged "display", but you can put a different element there.
function showMessage(message, location = "display"){
    document.getElementById(location).innerHTML = message
}


function hideMessage(location = "display"){
    document.getElementById(location).innerHTML = ""
}

function drawTables(multiplierMin = 1, multiplierMax = 10, number = 12){

    let table = []
    
    function grey(input){
        if(input)
            return "grey"
        else
            return "white"
    }


    for(let i = multiplierMin; i <= multiplierMax; i++){
        let toggle = true
        table.push("<table>")
        table.push("\t<th>Number</th>")
        table.push("\t<th>Multiplier</th>")
        table.push("\t<th>Result</th>")
        
        for(let k = 1; k <= number; k++){
            table.push(`\t<tr class = "${grey(toggle)}">`)
            table.push(`\t\t<td>${k}</td>`)
            table.push(`\t\t<td>${i}</td>`)
            table.push(`\t\t<td>${i * k}</td>`)
            table.push("\t</tr>")
            toggle = !toggle

        }
        table.push("</table>")

    }


    let tableHTML = table.join("\n")
    console.log(tableHTML)

    document.getElementById("studyHall").innerHTML += tableHTML;
}

function test(){
    console.log("this button is working!")
}

drawTables(5, 9, 9)