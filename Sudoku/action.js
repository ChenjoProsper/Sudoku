// This function will retrieve all inputs and classify them in a grid
function getInputGrid() {
    // Initialize a 2D array (array of arrays) to hold the grid
    let grid = Array.from({ length: 9 }, () => Array(9).fill(null));

    // Select all blocks
    var blocks = document.querySelectorAll('.section');

    // Iterate over each block
    blocks.forEach((block, blockIndex) => {
        // Select all inputs within the current block
        var inputs = block.querySelectorAll('.cell');

        // Calculate the starting row and column index for the current block
        let startRow = Math.floor(blockIndex / 3) * 3;
        let startCol = (blockIndex % 3) * 3;

        // Iterate over each input by index
        inputs.forEach((input, index) => {
            // Calculate the row and column index within the grid
            let rowIndex = startRow + Math.floor(index / 3);
            let colIndex = startCol + (index % 3);

            // Create an object to hold the input's value and modifiable status
            let cellData = {
                value: input.value,
                modifiable: !input.hasAttribute('readonly')
            };

            // Place the cell data in the correct position in the grid
            grid[rowIndex][colIndex] = cellData;
        });
    });

    return grid;
}

// Example usage: Retrieve the input grid and log it to the console
var inputGrid = getInputGrid();
console.log(inputGrid);

// This function will retrieve all inputs and classify them in a grid
function getInputGrid2() {
    // Initialize a 2D array (array of arrays) to hold the grid
    let grid = [];
  
    // Select all blocks
    var blocks = document.querySelectorAll('.section');
  
    // Iterate over each block
    blocks.forEach((block, blockIndex) => {
      // Initialize an array for the current block
      let blockArray = [];
  
      // Select all inputs within the current block
        var inputs = block.querySelectorAll('.cell');
  
      // Iterate over each input
      inputs.forEach(input => {
        // Create an object to hold the input's value and modifiable status
        let cellData = {
          value: input.value,
          modifiable: !input.hasAttribute('readonly')
        };
        
        // Add the cell data to the current block array
        blockArray.push(cellData);
      });
  
      // Add the block array to the grid
      grid.push(blockArray);
    });
  
    return grid;
  }
  
  // Example usage: Retrieve the input grid and log it to the console
  var inputGrid2 = getInputGrid2();
  console.log(inputGrid2);
  

// console.log(inputGrid[0][3].value)


function saisir(id,cas,ligne,colonne,lignecas){
    var val = document.getElementById(id)
    var size = String(val.value)
    if(size.length > 1){
        val.value = size[0]
    }
    if(size.length<1){
        val.value = ""
        inputGrid2[Math.floor(cas)][Math.floor(lignecas)].value = val.value;
        inputGrid[Math.floor(ligne)][Math.floor(colonne)].value =  val.value;
    }
    verifier(id,cas,ligne,colonne,lignecas)
}


function verifier(id,cas,ligne,colonne,lignecas){
    var tr = 0
    var val = document.getElementById(id)
    for(let i = 0; i < 9 ; i++){
        if((inputGrid[Math.floor(ligne)][i].value == val.value || inputGrid[i][Math.floor(colonne)].value == val.value) && Math.floor(colonne) != i){
            tr = 1
        }
    }
    if(tr == 1){
        val.style.backgroundColor  = "red";
    }else{
        val.style.backgroundColor  = "green";
        inputGrid[Math.floor(ligne)][Math.floor(colonne)].value =  val.value;
    }
    verifier2(tr,id,cas,lignecas)
}

function verifier2(etat,id,cas,lignecas){
    if(etat == 0){
        var tr = 0
        var val = document.getElementById(id)
        for(let i = 0; i < 9; i++){
            if((inputGrid2[Math.floor(cas)][i].value == val.value) && Math.floor(lignecas) != i){
                tr = 1
            }
        }
        if(tr == 1){
            val.style.backgroundColor  = "red";
        }else{
            inputGrid2[Math.floor(cas)][Math.floor(lignecas)].value = val.value
            val.style.backgroundColor  = "green";
        }
    }
}

function sumLigne(liste){
    s = 0
    for(let i = 0; i < 9; i++){
        s += liste[i].value
    }
}

addEventListener("mouseover",gagner)

function gagner(){
    var win = true
    for(let i = 0; i < 9; i++){
        if(sumLigne(inputGrid[i]) != 45){
            win = false
        }
    }
    if(win == true){
        console.log("gagner")
    }
}