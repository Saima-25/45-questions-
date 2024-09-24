/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.

 • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

 • Print a message to each of the two people still on your list, letting them know they’re still invited.

 • Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program.*/

let guests = ["Sam", "Sana", "Sabeen", "Sara", "Sameen", "Saba"]; // Q16 array
console.log(
  "Unfortunately, the new dinner table won't arrive in time for the dinner, and we can only invite two people."
); // // Inform that only two people can be invited for dinner
while (guests.length > 2) {
    let removeGuest= guests.pop();
    if (removeGuest !== undefined) {
        console.log(`Sorry, ${removeGuest}, we can't invite you to dinner.`);
    }
}
for (let guest of guests) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);    // Print a message to each of the two people still on the list

}

guests.pop();               // Remove the last two names from the list
guests.pop();

console.log("Remaining guests:", guests);     // Print the list to ensure it's empty


