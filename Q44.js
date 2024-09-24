/*Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides,
  and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.*/
function sandwich(...items) {
    console.log('Required sandwich items are:');
    for (let item of items) {
        console.log(`${item}`);
    }
    console.log('Your sandwich is ready!');
}
sandwich('cheese', 'mayonese', 'chicken');
sandwich('egg', 'mayonese', 'black pepper');
sandwich('cheese', 'lettuce', 'chicken');
export {};
