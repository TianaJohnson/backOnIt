const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname,'/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created..');
// });

//create and write file
fs.writeFile(path.join(__dirname,'/test', 'hello.txt'), 'Hello World! ', err => {
    if(err) throw err;
    console.log('Folder created..');
    fs.appendFile(path.join(__dirname,'/test', 'hello.txt'), 'I love node J', err => {
        if(err) throw err;
        console.log('Folder created..');
    });
});

