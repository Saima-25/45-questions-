// Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//   by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
function show_magicians(a: (magician_name: string[]) => void) {
    let magician_name: string[] = ["Criss Angel", "David Blaine", "Lance Burton"];
    console.log(magician_name);
    a(magician_name);
  }
  function make_great(magician_name: string[]) {
    for (let name of magician_name) {
      console.log(` The Great ${name}`);
    }
  }
  show_magicians(make_great);     // callback 
  