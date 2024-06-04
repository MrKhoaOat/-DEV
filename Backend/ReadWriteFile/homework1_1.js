const express = require('express');

const app = express();

let fs = require('fs');

// fs.writeFile('demofile.txt', 'Hello World!','utf-8',err => {
//     if(err) console.log(err);
//     else console.log('File created');
// })

// fs.readFile('demofile.txt','utf-8',(err,data) => {
//     if(err) console.log(err);
//     else console.log(data);
// })

// fs.writeFile('demofile2.txt', 'file2 content', 'utf8', function (err) {
//     console.log("write file success")
//     fs.readFile('demofile2.txt', 'utf8', function (err, data) {
//         console.log("read file", data);
//     });
// });

const filename = ['head', 'body', 'leg', 'feet'];
var robot = "";

filename.forEach(name => {
    fs.writeFile(`${name}.txt`, `I'm ${name}.`, 'utf8', err => {
        if (err) console.log("Error")
        else console.log("Write Complete")
    });
});

filename.forEach(name => {
    fs.readFile(`${name}.txt`, 'utf8', (err, data) => {
        fs.writeFile('robot.txt', robot += `${data} \n`, 'utf-8', err => {
            if (err) console.log("Error")
            else console.log("Write Complete")
        })
    })
})