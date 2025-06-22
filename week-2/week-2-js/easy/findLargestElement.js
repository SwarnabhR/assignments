function findLargestElement(numbers) {
    if (numbers.length === 0) return undefined;

    let largestNumber = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

module.exports = findLargestElement;
