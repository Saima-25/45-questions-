/* More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
 • Start with your program from Exercise 15. Add a print statement to the end of your program
 informing people that you found a bigger dinner table.

 • Add one new guest to the beginning of your array.

 • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
let guests = ["Sana", "Sara", "Sameen"];
console.log("Great news! We found a bigger dinner table!");
guests.unshift("Sam"); // to add at begining of an array
guests.splice(guests.length / 2, 0, "Sabeen"); // to add an element middle of the array
guests.push("Saba"); // to add an entry at the end of the array
for (let guest of guests) {
    console.log(`Hi ${guest}, \n\n\tJoin us for an evening of good food and great company. Your presence would make our dinner complete!\n\n\tRegards,\n\n\tSaima\n\n`);
}
console.log(guests);
export {};
