//splits my string  into an array of characters
function isLetters(string){
    const letters = string.split("");
    const isLetters = letters.map
    (char => {
        //check my character is Uppercase/lowercase
        if (char ===char.toUpperCase()) {
            return string.toLowerCase();
        }else
        {
            return string.toUpperCase();
        }
     
    });
    //output
    console.log(isLetters);
}
//example with Liz having Easter
const swappedString = isLetters("Liz is Having EASTER");
