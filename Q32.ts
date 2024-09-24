/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a 
unique username.
 • Make a list of five or more usernames called current_users.

 • Make another list of five usernames called new_users. Make sure one or two of the 
 new usernames are also in the current_users list.

 • Loop through the new_users list to see if each new username has already been used. If it has, 
print a message that the person will need to enter a new username. If a username has not been used, 
print a message saying that the username is available.

 • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users =['Zeeshan','Mehar','Qamar','Suman','Sufyan']
let new_users= ['Sami','Mehar','Ayna', 'Anaya','Suman']

// for case insensitive 
// let current_users_lowerCase:string[]= []
// for(let users of current_users)
//     {current_users.push(users.toLowerCase())}

// for(let users of new_users)
//     {let users_lower = users.toLowerCase();
// if(current_users_lowerCase.includes(users_lower))
// {
//     console.log(`The username '${users}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`The username '${users}' is available.`);
//     }
// }
let current_users_lowerCase: string[] = []
for (let users of current_users) {
    current_users_lowerCase.push(users.toLowerCase())
}

for (let users of new_users) {
    let users_lower = users.toLowerCase()
    if (current_users_lowerCase.includes(users_lower)) {
        console.log(`The username '${users}' is already taken. Please enter a new username.`)
    } else {
        console.log(`The username '${users}' is available.`)
    }
}

