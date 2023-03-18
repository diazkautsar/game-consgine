function buildPattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        let row = '';
        let numStars = Math.abs(n - 2*i + 1);
        let numPounds = n - numStars;
        for (let j = 1; j <= numStars/2; j++) {
            row += '*';
        }

        for (let j = 1; j <= numPounds; j++) {
            row += '#';
        }

        for (let j = 1; j <= numStars/2; j++) {
            row += '*';
        }
        
        pattern += row + '\n';
    }

    return pattern;
}
  
console.log(buildPattern(5));