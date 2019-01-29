// gather all squares into array
let cells = document.querySelectorAll('.row div'),
    clickCount = 0,
    checkBoard = [
      ['one', 'two', 'three'],
      ['four', 'five', 'six'],
      ['seven', 'eight', 'nine'],
      ['one', 'four', 'seven'],
      ['two', 'five', 'eight'],
      ['three', 'six', 'nine'],
      ['one', 'five', 'nine'],
      ['three', 'five', 'seven']
    ];

// listen to all squares
cells.forEach(cell => {
  cell.addEventListener('click', clickedCell);
});

// function to check squares
function clickedCell(e) {
  // helpers
    //console.log(e);
    console.log('clickCount: ' + clickCount);
    
    // if 9th click, clear board, or else carry on
    if(clickCount >= 9){
      resetToStart();
    } else {
      
      // if cell is empty, add X or O
      if( e.target.innerHTML.length == 0){
        // increase click count
        clickCount++;

        // check if even or odd click, add X or O
        if(clickCount % 2 == true){
          e.target.innerHTML = 'X';
        } else if(clickCount % 2 == false){
          e.target.innerHTML = 'O';
        }
        // check if we have a winner
        checkWinningCombo('X');
        checkWinningCombo('O');

      }
    }
}

function checkWinningCombo(letter){
  // cylce through array of options to see if we have a match. If a match, then a winner
  for (let i = 0; i < checkBoard.length; i++) {
    [k,l,m] = [checkBoard[i][0],checkBoard[i][1],checkBoard[i][2]]
    kEdit = '.'+k, lEdit = '.'+l, mEdit = '.'+m;

    if( divSelector(kEdit) == letter  && divSelector(lEdit) == letter && divSelector(mEdit) == letter ){
      document.querySelector('.message').innerHTML = 'We have a winner! Game Over!';
    }
    if( divSelector(kEdit) == letter  && divSelector(lEdit) == letter && divSelector(mEdit) == letter && document.querySelector('.message').innerHTML.length > 0){
      resetToStart();
    }
  }
}

// reset game
function resetToStart(){
  cells.forEach(cell => {
    cell.innerHTML = "";
  });
  clickCount = 0;
  console.log('Game has been reset!');
}

// select element and check innerHTML
function divSelector(e){
  return document.querySelector(e).innerHTML;
}