function getPrimeNumbers(numbers) {
    //checks if my number is prime
    function isPrime(number){
        //a number 1 or less is not prime
        if(number <=1)
        return false;
    //if a number is divisible other than 1 and itself, it's not prime.
        for(let i =2 ; i <= Math.sqrt(number); i++){
            if(number % i === 0)
            return false; 
        }
        return true;
    }
    // Used filter()method to create a new array containing only prime numbers
    const primeNumbers = numbers.filter(isPrime);
    return primeNumbers;
}

//this example creates an array with some prime and nonprime numbers, outputs only prime numbers.
const numbersSet = [ 1, 9, 7, 10, 11, 13, 17, 19, 23, 36, 48, 51, 59, 60,73, 89];
const primeNumbers = getPrimeNumbers(numbersSet);
console.log(primeNumbers);

  