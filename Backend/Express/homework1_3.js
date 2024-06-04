const express = require('express');

const app = express();

let fs = require('fs');
const port = 3000;



app.get('/read-users', (req, res) => {
    fs.readFile(`users.json`, 'utf8', (err, data) => {
        if (err) console.log(err);
        else {
            res.json(JSON.parse(data));
        }
    });
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
 });
 
 