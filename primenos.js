//the function accepts two numbers
function createNumbersBetween(start, finish) {
    //the function checks if start is less than or equal to end, and if true, it uses a for loop to iterate from start to end and pushes each 
    let result = [];
    if(start <= finish) {
        for(let i = start; i <= finish; i++) {
            result.push(i);
        }
    return result;
    }
}
//example that calls my function with start as 7, finishes at 17.
const start = 7;
const finish= 17;
const getResult = createNumbersBetween(start, finish);
//output selection I have made
console.log(start, finish);
//output of the generated numbers between 7-17.
console.log(getResult);
