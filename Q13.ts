/*Think of your favorite mode of transportation, such as a motorcycle or a car, 
and make a list that stores several examples. Use your list to print a series of statements
 about these items, such as “I would like to own a Honda motorcycle.”*/

let transports =["car","bike","bicycle", "train", "bus"]
for( let transport of transports){
    console.log(` I want to travel by ${transport} because I love vehicles.`)
}