//Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = "*"; i.length <= 8; i += "*") {
  console.log(i);
}

// i.length < 8: This condition checks whether the length of the string i is less than 8.
// It ensures that the loop continues until the string i contains 7 asterisks.
