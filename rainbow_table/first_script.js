const fs = require('fs');
const readline = require('readline');

const argv = process.argv[2]

const readInterface = readline.createInterface({
    input: fs.createReadStream(argv),
    console: false
});

const lines = []

//it loops till it reaches last line
readInterface.on('line', function (line) { 
    lines.push(line)
})
.on('close', () => {
    // join lines into one string
    const wordsString = lines.join(' ')
    // split the sting into single words
    const wordsWithSpecialChars = wordsString.split(' ')
    // remove non letters chars and remove empty strings
    const wordsOnly = wordsWithSpecialChars.map( word => 
        word.replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, ""))
        .filter(word => word.length > 0)
    // count occurence of given word
    const wordsOccurrence = wordCount(wordsOnly)
    // find unique words
    const uniqueWords = findUniqueWords(wordsOccurrence)
    // add new line char and write to file
    fs.writeFile('./words_list.txt', uniqueWords.join('\n'), err => console.log(err) )
})

function wordCount(wordsArray) {
    const wordCount = {}
    wordsArray.forEach((word) => {
        wordCount[word] = wordCount[word] + 1 || 1
    })
    return wordCount
}

function findUniqueWords(wordsObject) {
    const uniqueWords = []
    for (let [key, value] of Object.entries(wordsObject)) {
        if (value === 1) {
            uniqueWords.push(key)
        }
    }
    return uniqueWords
}


