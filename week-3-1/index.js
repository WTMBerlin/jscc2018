const fs = require('fs');

/*

First version, synchronous

*/

const file1 = fs.readFileSync('./files/1.txt', 'utf8');
console.log(file1);

const file2 = fs.readFileSync('./files/2.txt', 'utf8');
console.log(file2);

const file3 = fs.readFileSync('./files/3.txt', 'utf8');
console.log(file3);

/*

Second version, asynchronous

*/

fs.readFile('./files/1.txt', 'utf8', (err, contents1) => {
    console.log(contents1)
    fs.readFile('./files/2.txt', 'utf8', (err, contents2) => {
        console.log(contents2)
        fs.readFile('./files/3.txt', 'utf8', (err, contents3) => {
            console.log(contents3)
        });
    });
});


/*

Third version, promises

*/

let readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if (err) return reject(err);

            resolve(contents);
        });
    });
}

readFile('./files/1.txt')
    .then(console.log)
    .then(() => readFile('./files/2.txt'))
    .then(console.log)
    .then(() => readFile('./files/3.txt'))
    .then(console.log);

/*

Fourth version, async / await

*/

const main = async () => {
    const contents1 = await readFile('./files/1.txt')
    console.log(contents1)

    const contents2 = await readFile('./files/2.txt')
    console.log(contents2)

    const contents3 = await readFile('./files/3.txt')
    console.log(contents3)
}

main()
