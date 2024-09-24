// Make an array of magician’s names.
//  Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician_name = ["Criss Angel", "David Blaine", "Lance Burton"];
function show_magicians(magician) {
    for (let name of magician_name) {
        console.log(name);
    }
}
show_magicians(magician_name);
export {};
