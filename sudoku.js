console.log("running");

let board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 9, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 5, 8, 0, 2, 0, 0, 3, 6],
  [0, 3, 4, 0, 1, 6, 0, 9, 0, 2],
  [0, 0, 0, 9, 2, 0, 8, 1, 7, 5],
  [0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
  [0, 0, 3, 5, 6, 0, 1, 0, 4, 0],
  [0, 0, 0, 0, 3, 0, 0, 5, 9, 4],
  [0, 5, 1, 3, 4, 8, 0, 0, 0, 7],
  [0, 6, 9, 4, 7, 5, 2, 0, 0, 3]
]

drawHTMLtable(board);

function drawHTMLtable(input){
let tableHTML = "";
  if (Array.isArray(input)){
  	tableHTML += "<table>"
    for (let i = 1; i < 10; i++){
    	tableHTML += "<tr>"
    	for (let j = 1; j < 10; j++){
      	if(input[i][j].value == null){
        
        
          if(input[i][j] !== 0){
            tableHTML += "<td>" + input[i][j] + "</td>";
          }
          else{
            tableHTML += "<td>" + " " + "</td>";
          }
         }
         else{
         	tableHTML += "<td>" + input[i][j].value + "</td>";
         }

      }
      tableHTML += "</tr>";
    }
    tableHTML += "</table>";
  	document.getElementById("testBoard").innerHTML = tableHTML;

  }
  else{
  	console.log("that's not an array");
  	return;
  }

}

function solve(){
	iterateAll(board);
}

let test = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 6, 7, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 9, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 9, 1, 1, 1, 1],
  [0, 1, 1, 9, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 9, 1, 1, 1, 1, 1]
]

let snail = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
  [0, 1, 0, 0, 0, 0, 7, 0, 9, 0], //1
  [0, 0, 3, 0, 0, 2, 0, 0, 0, 8], //2
  [0, 0, 0, 9, 6, 0, 0, 5, 0, 0], //3
  [0, 0, 0, 5, 3, 0, 0, 9, 0, 0], //4
  [0, 0, 1, 0, 0, 8, 0, 0, 0, 2], //5
  [0, 6, 0, 0, 0, 0, 4, 0, 0, 0], //6
  [0, 3, 0, 0, 0, 0, 0, 0, 1, 0], //7
  [0, 0, 4, 0, 0, 0, 0, 0, 0, 7], //8
  [0, 0, 0, 7, 0, 0, 0, 3, 0, 0], //9
]


//console.log(board);
//console.log(board[1][1]);
makeBoxes(board);
makeBoxes(snail);
makeBoxes(test);
//console.log(board);

//iterateAll(board);
//console.log(board);

//iterateAll(snail);
//console.log(snail);

//iterateAll(test);
//console.log(test);

function iterateAll(board) {
  let rerun = false;
  for (let i = 1; i < 10; i++) { //rows
		
    for (let k = 1; k < 10; k++) { //iterating through each item in the row
      let box = board[i][k];
      checkRow(board, box);
      checkColumn(board, box);
      checkChunk(board, box);
			checkNowhereElse(board, box);
			
      if (box.possibleVal.length == 1) {
        box.value = box.possibleVal[0];
        box.possibleVal = [];
        rerun = true;
      }
    }
  }
  drawHTMLtable(board);
  if (rerun) {
    console.log("rerunning!");
    iterateAll(board);
  } else {
    checkCompletion(board);
  }

}



//constructor for boxes with row and column identifiers, as well as value and potential values
function box(row, column, value) {
  this.row = row;
  this.column = column;
  this.value = value;
  this.possibleVal = [];
  if (this.value == 0) {
    this.possibleVal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
}


//creating objects for each box. 
function makeBoxes(board) {
  console.log("making boxes...");
  for (let i = 1; i < 10; i++) { //rows
    for (let k = 1; k < 10; k++) { //iterating through each item in the row
      let hold = board[i][k]
      //console.log(board[i][k]);
      board[i][k] = new box(i, k, hold);
      //console.log(board[i][k]);

    }
  }
}

//checks to see if all spaces have a value, counts up how many do, flags which ones do not
function checkCompletion(board) {

  console.log("I can't solve any further with my current logic.");
  console.log("Checking completion...");
  let filled = 0;
  for (let i = 1; i < 10; i++) { //rows
    for (let k = 1; k < 10; k++) { //iterating through each item in the row
      let box = board[i][k];
      if (box.value !== 0) {
        filled++;
      } else if (box.value == 0) {
        console.log("the box at " + box.row + ", " + box.column + " is empty!");
      }
    }
  }
  if (filled == 81) {
    console.log("Successfully solved!");
  } else {
    console.log("Attempt unsuccessful :( " + filled + "/81 boxes filled");
  }
}

//checks to see what values are present in a given chunk and removes them as possibilities for other spaces in that chunk
function checkChunk(board, box) {
  //console.log("checking chunk for " + box.row + ", " + box.column + "...");
  if (box.value == 0) {
    let rowMod = getRowMod(box);
    let colMod = getColumnMod(box);
    for (let i = 1; i < 4; i++) {
      for (let k = 1; k < 4; k++) {
        let hold = board[i + rowMod][k + colMod].value;
        if (hold !== 0) {
          if (box.possibleVal.includes(hold)) {
            let index = box.possibleVal.indexOf(hold);
            box.possibleVal.splice(index, 1);
            //console.log("splicing " + hold + "! " + box.possibleVal);
          } else {
            //console.log("i didn't find anything to remove!");
          }
        }
      }
    }
    return;
  } else {
    //console.log("this box is already filled!");
    return;
  }




}

//gets modifier for checking chunks in a universal way
function getRowMod(box) {
  let rowMod = 3;
  let section = "Middle Section";
  if (box.row < 4) {
    rowMod = 0;
    section = "Top Section";
  } else if (box.row > 6) {
    rowMod = 6;
    section = "Bottom Section";
  }
  //console.log(section);
  return rowMod;

}

//gets modifier for checking chunks in a universal way
function getColumnMod(box) {
  let colMod = 3;
  let section = "Middle Section";
  if (box.column < 4) {
    colMod = 0;
    section = "Left Section";
  } else if (box.column > 6) {
    colMod = 6;
    section = "Right Section";
  }
  //console.log(section);
  return colMod;
}

//checks what values are already present in a given row and removes them as possible solutions for other spaces in that row 
function checkRow(board, box) {
  //console.log("checking row for box " + box.row + ", " + box.column + "...");

  if (box.value == 0) { //only if the current box is empty. skips filled boxes

    for (let k = 1; k < 10; k++) { //iterates through row
      let hold = board[box.row][k].value;
      if (hold !== 0) { //board[box.row][k] -> box K in current row
        //found a box with a value
        if (box.possibleVal.includes(hold)) {
          let index = box.possibleVal.indexOf(hold);
          box.possibleVal.splice(index, 1);
          //console.log("splicing " + hold + "! " + box.possibleVal);
        }

      }
    }
    return;

  } else {
    //console.log("this box is already full!");
    return;
  }
}

//checks to see what values are already present in a given column and removes them as possible solutions for other spaces in that column
function checkColumn(board, box) {
  //console.log("checking column for box " + box.row + ", " + box.column + "...");

  if (box.value == 0) { //only if the current box is empty. skips filled boxes

    for (let i = 1; i < 10; i++) { //iterates through columns
      let hold = board[i][box.column].value;
      if (hold !== 0) {
        if (box.possibleVal.includes(hold)) {
          let index = box.possibleVal.indexOf(hold);
          box.possibleVal.splice(index, 1);
          //console.log("splicing " + hold + "! " + box.possibleVal);
        } else {
          //console.log("this box is empty, but I couldn't find any possible values to remove");
        }

      }
    }
  } else {
    //console.log("this box is already full!");
    return;
  }
}

//checks to see if identical doubles (two spaces with the same two possible solutions) are present in a given row, column, or chunk, and removes those two values as possible solutions for other spaces in each respective row, column, or chunk, depending. 
function checkDoubles(board, box) {

  let a1, a2, b1, b2;
//you are not a double. get thee gone. 
  if (box.value !== 0) {return;}
  if (box.possibleVal.length !== 2) {return;}

  for (let k = 1; k < 10; k++) {

  }


}

//checks to see if a specific value can only be present in a single space in a given row, column, or chunk, and fills in spaces where applicable. 
function checkNowhereElse(board, box) {
//console.log("checking for nowhere else");
  if (box.value == 0) {
    
  
	//console.log("are you getting to this point?");
	let hold;
	let row = box.row
	let col = box.column
	let skip = [];
	//console.log("skipping these values: ");
	
	
	for(n = 0; n < box.possibleVal.length; n++){ 
	//for all remaining possible values
	let options = 1;
		hold = box.possibleVal[n];
		for(k = 1; k < 10; k++){
			if(box.value == 0 && k !== box.column && !skip.includes(hold)){
				if(board[row][k].possibleVal.includes(hold)){
				options++;
					//console.log(row + ", " + col + " and " + row + ", " + k + " can both hold " + hold + ". skipping this number.");
					skip.push(hold);
					//console.log("adding a value to skip! skipping: " + skip);
					break;
				}
			}
	}
	if(options == 1){
		//console.log("only " + box.row + ", " + box.column + " can hold " + hold);
		box.value = hold;
		box.possibleVal = [];
	}
		
	}



}
}
