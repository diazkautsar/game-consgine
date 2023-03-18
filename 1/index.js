function anagrams (words = []) {
    const tmp = {}

    for (let i = 0; i < words.length; i++) {
        const word = words[i].split('').sort().join('')

        if (!tmp[word]) {
            tmp[word] = [ words[i] ]
        } else {
            tmp[word].push(words[i])
        }
    }

    return Object.values(tmp)
}

const words = ['kita', 'kau', 'atik', 'tika', 'aku', 'kia', 'makan', 'gameconsign', 'kua'];
const anagramGroups = anagrams(words);
console.log(anagramGroups);
