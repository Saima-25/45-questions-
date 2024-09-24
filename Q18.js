/*Seeing the World: Think of at least five places in the world you’d like to visit.
 • Store the locations in a array. Make sure the array is not in alphabetical order.

 • Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

 • Show that your array is still in its original order by printing it.

 • Print your array in reverse alphabetical order without changing the order of the original list.

 • Show that your array is still in its original order by printing it again.

 • Reverse the order of your list. Print the array to show that its order has changed.

 • Reverse the order of your list again. Print the list to show it’s back to its original order.

 • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

 • Sort to change your array so it’s stored in reverse alphabetical order.
 Print the list to show that its order has changed.*/
let location1 = ["Saudi Arabia", "France", "California", "Russia", "Egypt"];
console.log(location1);
let ordered = location1.slice().sort(); // using slice to not modify while sort will arrange the list in alphabatical order
console.log(ordered);
console.log(location1);
let reverseordered = location1.slice().sort().reverse();
console.log(reverseordered);
console.log(location1);
location1.reverse();
console.log(location1);
location1.reverse();
console.log(location1);
location1.sort();
console.log(location1);
location1.reverse();
console.log(location1);
export {};
