const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const mysql = require("mysql2/promise");
const dbConn = mysql.createConnection({
   host: 'localhost',
   user: 'root', // <== ระบุให้ถูกต้อง
   password: '',  // <== ระบุให้ถูกต้อง
   database: 'pim_database',
   port: 3306  // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
});

app.get("/", (req, res) => {
   res.send("Hello World");
})

// [] array destructure
app.get("/query-1", async (req, res) => {
   const connection = await dbConn
   const [rows] = await connection.query('SELECT * from students')
   res.send(rows);
})

app.get("/query-2/:id", async (req, res) => {
   const connection = await dbConn
   const [rows] = await connection.query('SELECT * from students where id = ' + req.params.id)
   res.send(rows);
})

//localhost:3000/query-2?id=3
app.get("/query-2", async (req, res) => {
   const connection = await dbConn
   const [rows] = await connection.query('SELECT * from students where id = ' + req.query.id)
  
  
   if (rows.length != 0) res.status(200).send(rows);
   else res.status(404).send("No data found!")
})

app.delete("/query-3/:id", async (req, res) => {
   const connection = await dbConn
   const [rows] = await connection.query('DELETE from students where id = ' + req.params.id)
   res.send("Delete success!");
}
)

app.post("/query-4", async (req, res) => {
   const connection = await dbConn
   var name = req.body.name
   var age = req.body.age
   var phone = req.body.phone
   var email = req.body.email
   const [rows] = await connection.query(`INSERT INTO students (name, age, phone, email) VALUES ('${name}', ${age}, '${phone}', '${email}')`)
   res.send("Insert success!");
})

app.put("/query-5/:id", async (req, res) => {
   const connection = await dbConn
   var name = req.body.name
   var age = req.body.age
   var phone = req.body.phone
   var email = req.body.email
   
   const [rows] = await connection.query(`UPDATE students SET name = '${name}', age = ${age}, phone = '${phone}', email = '${email}' WHERE id = ${req.params.id}`)
   res.send("Update success!");
})

app.listen(3000, () => {
   console.log("Server is running at port 3000")
})


