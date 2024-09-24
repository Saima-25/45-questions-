/* Name Cases: Store a person’s name in a variable, and then print that person’s
 name in lowercase, uppercase, and titlecase.*/
let personName = "muhammad ahmed khan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
let names = personName.split(" ");
/*split(" ") function breaks the personName string into an
           array of words, using space (" ") as the separator.
      names variable now holds an array of individual words,
      like ["muhammad", "ahmed", "khan"].*/
for (let i = 0; i < names.length; i++) {
    names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase();
}
console.log(names.join(" ")); /*join(" ") function combines the array of words (names)
                                                                    into a single string, with spaces (" ") between each word.*/
export {};
