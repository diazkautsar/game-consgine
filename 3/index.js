function findTwoNumbers(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i, j].join(', ');
        }
      }
    }

    return null;
}
  
// Example usage:
console.log(findTwoNumbers([0, 2, 0, 4, 5, 0], 5));
console.log(findTwoNumbers([2, 7, 11, 15], 9));
  