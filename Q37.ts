/* Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_shirt(
  size: string = "large",
  message: string = "I love TypeScript"
) {
  console.log(`${size}  ${message}`);
}
make_shirt("large:", "I love TypeScript.");
make_shirt("medium:", "I love TypeScript.");
make_shirt("small:", "I like coding.");
