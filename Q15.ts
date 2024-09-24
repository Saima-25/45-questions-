// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guests= ["Sana", 'Sara', "Safana"];
let guestWhoCantJoin= guests.pop()     // to remove last entry i.e Safana
console.log(`Unfortunately, ${guestWhoCantJoin} can't make it to the dinner.`)

let newGuest= "Sophia"
if (guestWhoCantJoin !== undefined) {
   // Replace the name of the guest who can't make it with the name of the new guest
   if (guests.length > 0) {
       [guests[2]] = [newGuest];
   }
}

for(let guest of guests){
console.log(`Hi ${guest}, \n\n\t Join us for an evening of good food and great company. Your presence would make our dinner complete!"\n\n\t Regards,\n\n\t Saima\n\n\t ` )
}
console.log(guests)

 

 
 

 
