/* Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once. 
 Print the name once, so the whitespace around the name is displayed. */
let name1 = "\t\n   Muhammad Wasay   \n\t";
console.log(name1)
//Then print the name after striping the white spaces.//
 

let stripped= name1.trim();   //trim() is a function in JS which removes space.
console.log(stripped);

