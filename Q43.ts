// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and
//   one array with the Great added to each magician’s name.

let magician_name:string[]=["Criss Angel","David Blaine", "Lance Burton"]

let copy_mag_name:string[]=[...magician_name]     // to create copy used spread operator ...
function make_great(copy_mag_name:string[]) {
    
    for(let i=0; i<copy_mag_name.length; i++){
        
   
        copy_mag_name[i]=`The Great ${copy_mag_name[i]}`
    }
        
    return copy_mag_name;
}
make_great(magician_name)
function show_magicians(a:(make_great:string[])=>void){
    for(let name of copy_mag_name){
        console.log(name)
    }
    a(copy_mag_name)
}
show_magicians(make_great);







