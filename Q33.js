/* Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
 Most ordinal numbers end in th, except 1, 2, and 3.
 • Store the numbers 1 through 9 in a array.*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var ordinal_no_end = void 0;
    if (number === 1) {
        ordinal_no_end = "st";
    }
    else if (number === 2) {
        ordinal_no_end = "nd";
    }
    else if (number === 3) {
        ordinal_no_end = "rd";
    }
    else {
        ordinal_no_end = "th";
    }
    // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
    console.log("".concat(number).concat(ordinal_no_end));
}
