//splits my string  into an array of characters
function isLetters(string){
    const letters = string.split("");
    const isLetters = letters.map
    (char => {
        //check my character is Uppercase/lowercase
        if (char ===char.toUpperCase()) {
            return char.toLowerCase();
        }else
        {
            return char.toUpperCase();
        }
     
    });
    //my output using char.toUpperCase/LowerCase swaps the letters. a different result occurs if i use string.toUpperCase/LowerCase instead, the string swaps each other.
    console.log(isLetters);
}
//example 
const swappedString = isLetters("Liz is Having EASTER");
