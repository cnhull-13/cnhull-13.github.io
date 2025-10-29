function showMessage(message, location = "display"){
    document.getElementById(location).innerHTML = message
}

function hideMessage(location = "display"){
    document.getElementById(location).innerHTML = ""
}

function getData(){
    let input = document.getElementById("state").value
    if(input == ""){
        showMessage("Please enter a name or abbreviation to search.")
    }
    else{
        searchData(input)
    }
}

function clearData(){
    document.getElementById("state").value = ""
    hideMessage()
}

function searchData(input){
    let keyword = input.toLowerCase()
    let found = false
    for(i in data){
        if (data[i][0].toLowerCase() == keyword || data[i][1].toLowerCase() == keyword){
            let abbr = data[i][0]
            let name = data[i][1]
            let capital = data[i][2]
            let population = data[i][3].toLocaleString()
            let printer = `You requested information for ${input}:
            For the state of ${name} (${abbr}), the capital is ${capital}, and the population is ${population}.`
            showMessage(printer)
            found = true
        }
    }
    if(!found){
        for (j in allStates){
            if (allStates[j][0].toLowerCase() == keyword || allStates[j][1].toLowerCase() == keyword){
                let abbr = allStates[j][0]
                let name = allStates[j][1]
                let printer = `You requested information for ${input}:
                Unfortunately, ${name} (${abbr}) isn't one the states or territories I have data for.`
                showMessage(printer)
                found = true
            }
        }
    }
    if(!found){
        showMessage(`I looked for ${keyword}, but I couldn't find a state or territory by that name.`)
    }
}

let data = [
    ["AL", "Alabama", "Montgomery", 5157699],
    ["AK", "Alaska", "Juneau", 740133],
    ["AZ", "Arizona", "Phoenix", 7582384],
    ["CA", "California", "Sacramento", 39431263],
    ["CO", "Colorado", "Denver", 5957493]
]

let allStates = [
    ["AL", "Alabama", "Montgomery", 5157699],
    ["AK", "Alaska", "Juneau", 740133],
    ["AZ", "Arizona", "Phoenix", 7582384],
    ["CA", "California", "Sacramento", 39431263],
    ["CO", "Colorado", "Denver", 5957493],
    ["CT", "Connecticut"],
    ["DE", "Delaware"],
    ["DC", "District of Columbia"],
    ["FL", "Florida"],
    ["GA", "Georgia"],
    ["GU", "Guam"],
    ["HI", "Hawaii"],
    ["ID", "Idaho"],
    ["IL", "Illinois"],
    ["ID", "Indiana"],
    ["IA", "Iowa"],
    ["KS", "Kansas"],
    ["KY", "Kentucky"],
    ["LA", "Louisiana"],
    ["ME", "Maine"],
    ["MD", "Maryland"],
    ["MA", "Massachusetts"],
    ["MI", "Michigan"],
    ["MN", "Minnesota"],
    ["MS", "Mississippi"], 
    ["MO", "Missouri"],
    ["MT", "Montana"],
    ["NE", "Nebraska"],
    ["NV", "Nevada"],
    ["NH", "New Hampshire"],
    ["NJ", "New Jersey"],
    ["NM", "New Mexico"],
    ["NY", "New York"],
    ["NC", "North Carolina"],
    ["ND", "North Dakota"],
    ["MP", "Northern Mariana Islands"],
    ["OH", "Ohio"],
    ["OK", "Oklahoma"],
    ["OR", "Oregon"],
    ["PA", "Pennsylvania"],
    ["PA", "Puerto Rico"],
    ["RI", "Rhode Island"],
    ["SC", "South Carolina"], 
    ["SD", "South Dakota"],
    ["TN", "Tennessee"],
    ["TX", "Texas"],
    ["TT", "Trust Territories"],
    ["UT", "Utah"],
    ["VT", "Vermont"],
    ["VA", "Virginia"], 
    ["VI", "Virgin Islands"],
    ["WA", "Washington"],
    ["WV", "West Virginia"],
    ["WI", "Wisconsin"],
    ["WY", "Wyoming"]
]