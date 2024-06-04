const express = require('express');
const app = express();
const port = 3000;


app.get('/about', (req, res) => {
    res.send('This is about page.');
 });
 
 app.get('/my-json-api3', (req, res) => {
    res.json({"University": "PIM"});
 });
 
 app.get('/users2', (req, res) => {
    res.json([
        {
          id: 1,
          firstname: 'Somchai',
          lastname: 'Jaidee',
        },
        {
          id: 2,
          firstname: 'Tony',
          lastname: 'Stark',
        },
     ]
     );
   });
   
 

app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}`);
});

