const express = require('express');
const mysql = require('mysql2')
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'PIM' 
    })
app.use(express.static('../../public'));

app.get("/", (req, res) => {
    connection.query('SELECT * from users', (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
      });
     
})

app.get("/query1", (req, res) => {
    connection.query("select * from books where bname like '%mar%' limit 2", (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
      });
     
})

app.get("/query2", (req, res) => {
    connection.query('select sum(amount) from sell_histories', (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
      });
     
})

app.get("/query3", (req, res) => {
    connection.query('select distinct isbn from sell_histories', (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
      });
     
})

app.get("/query4", (req, res) => {
    connection.query('select sum(price) from sell_histories', (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
      });
     
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    connection.connect();
});