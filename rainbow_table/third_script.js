const fs = require('fs');
const readline = require('readline');

const argv = process.argv[2]
const passwordHash = 'c8e095e2a26f8540afabb36dcdaee3b1'

if (!argv) {
    console.log('\n*****\nPlease provide a file.\n*****\n')
    console.log('Usage: node third_script.js YOUR_FILE_HERE\n\n')
    return
}

const readInterface = readline.createInterface({
    input: fs.createReadStream(argv),
    console: false
});

const wordsAndHashesArray = []

readInterface.on('line', function (line) {
    const wordAndHash = line.split(' ')
    wordsAndHashesArray.push(wordAndHash)
})
.on('close', function () {
    const wordAndHash = wordsAndHashesArray.filter(function (element) {
        return element[1] === passwordHash
    })
    const password = wordAndHash[0][0]

    fs.writeFile(
        'result.txt',
        password,
        function (err) {
            if (err) {
                console.log(`Error: ${err}`)
            } else {
                console.log('Check result.txt for password.')
            }
        })
})