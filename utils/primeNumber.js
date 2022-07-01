function primeNumber(number) {
    let isPrime = true;
    if (number === 1) {
        return "1 is neither prime nor composite number.";
    }

    // check if number is greater than 1
    else if (number > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return `Given number ${number} is Prime`;
        } else {
            return `Given number ${number} is Not a Prime`;
        }
    }

    // check if number is less than 1
    else {
        return `Given number ${number} is Not a Prime`;
    }
}

module.exports = primeNumber;
