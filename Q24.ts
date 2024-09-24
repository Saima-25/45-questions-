/*You don’t have to limit the number of tests you create to 10. If you want to
 try more comparisons, write more tests. Have at least one True and one False result 
 for each of the following:*/
//• Tests for equality and inequality with strings
     console.log('excellent' =='excellent') // true for equality
     console.log('Excellent '== 'excellent')   //false for equality

     console.log('five' !== 'four') //true
     console.log('five'!== 'five')   //false
//• Tests using the lower case function
     console.log('RIGHT'.toLowerCase()==='right')   //true
     console.log('wrong'.toLowerCase()==='WRONG')    // false


/*• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to*/
console.log(5===4+1)   //true
console.log(5===4-3)   // false

console.log(25 !== 20)   // true for inequality
console.log(20 !== 20)   // false for inequaity

console.log(5<4)      // true
console.log(7>9)       //false

console.log(5 >= 4)      // true
console.log(10 >= 15)       //false

console.log(5 <= 8)      // true
console.log(7 >= 9)       //false

//• Tests using "and" and "or" operators

console.log(4<5   && 6>5)  //true
console.log(8<5   && 6>5)  //false
console.log(4<5   || 6>5)  //true
console.log(8<5   || 2>5)  //False


//• Test whether an item is in a array
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(4));  //  true
console.log(arr.includes(6));  //  false


//• Test whether an item is not in a array
console.log(!(5 in [1, 2, 3, 4])) // True
console.log(!(4  in [1, 2, 3, 4, 5])) // False
