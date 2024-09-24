/* Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same, but each message should be personalized with the person’s name. */

let names = ["Usman", "Hamza", "Muhammad", "Umer"];
let message =
  " \n \n I am going to give you an exciting news that my brother is coming from the US. To welcome him in energetic way, I arranged a get-together. If you people join me, I'll glad.\n\n venue:Laal-Qila \n\n";
console.log("Hi,\n\n" + names[0] + message);
console.log("Hi,\n\n" + names[1] + message);
console.log("Hi,\n\n" + names[2] + message);
console.log("Hi,\n\n" + names[3] + message);

// another way
let persons = ["Usman", "Hamza", "Muhammad", "Umer"];
let message1 =
  " \n \n I am going to give you an exciting news that my brother is coming from the US. To welcome him in energetic way, I arranged a get-together. If you people join me, I'll glad.\n\n venue:Laal-Qila \n\n";
for (let person of persons) {
  console.log(`Hi Dear, \n\n   ${person}  \n \n I am going to give you an exciting news that my brother is coming from the US. To welcome him in energetic way, I arranged a get-together. If you people join me, I'll glad.\n\n venue:Laal-Qila \n\n
`);
}
