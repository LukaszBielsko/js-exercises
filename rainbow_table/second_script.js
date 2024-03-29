const fs = require('fs');
const readline = require('readline');
const md5 = require('js-md5');

const argv = process.argv[2]

if (!argv) {
    console.log('\n*****\nPlease provide a file.\n*****\n')
    console.log('Usage: node second_script.js YOUR_FILE_HERE\n\n')
    return
} 

const readInterface = readline.createInterface({
    input: fs.createReadStream(argv),
    console: false
});

const wordsAndHashes = []

readInterface.on('line', function (line) {
    const hash = md5(line)
    wordsAndHashes.push(`${line} ${hash}`)
})
.on('close', function () {
    fs.writeFile(
        'rainbow_word_list.txt',
        wordsAndHashes.join('\n'),
        function (err) {
            if (err) {
                console.log(`Error: ${err}`)
            } else {
                console.log('Rainbow table created.')
            }
        })
})
