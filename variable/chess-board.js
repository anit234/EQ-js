//Chess - Board

// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character.
// The characters should form a chessboard.

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

//-----------------Solution--------------//

chessBoard = "";

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    // check if sum of row and col is even of odd
    if ((row + col) % 2 == 0) {
      chessBoard += " ";
    } else {
      chessBoard += "#";
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard);
