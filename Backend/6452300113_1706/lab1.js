const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/test-1", (req, res) => {
    res.status(200).send({ "status": "success" })
})

app.get("/test-2", (req, res) => {
    res.status(401).send({ "authorizationResult": "Access Denied" })
})

app.post("/test-3", (req, res) => {
    res.status(201).send({ "status": "Created" })
})

app.put("/test-4", (req, res) => {
    res.status(200).send("Already Updated")
})

app.delete("/test-5", (req, res) => {
    res.status(204).send({ "message": "Deleted" })
})

app.get('/getQuery', function (req, res) {
    console.log(req.query)
    res.send(req.query);
})

const students = [
    { name: 'sonter', age: 19 },
    { name: 'nat', age: 30 },
    { name: 'tle', age: 14 },
    { name: 'mos', age: 21 },
]

app.get('/student/:id', function (req, res) {
    if (req.params.id == 0) {
        res.send(students[0])
    } else if (req.params.id == 1) {
        res.send(students[1])
    } else if (req.params.id == 2) {
        res.send(students[2])
    } else if (req.params.id == 3) {
        res.send(students[3])
    } else {
        res.status(404).send({ message: 'User not found' })
    }
})


app.get('/user', (req, res) => {
    console.log(req.query.id)
    res.send(req.query.id)
})

// localhost:3000/add/5/10
app.get('/add/:a/:b', function (req, res) {
    var a = parseInt(req.params.a)
    var b = parseInt(req.params.b)
    // var c = a+b
    // console.log(c)
    // var d = c.toString()
    res.send((a + b).toString())
})

app.post('/add', function (req, res) {
    var a = parseInt(req.body.a)
    var b = parseInt(req.body.b)
    res.send(String(a + b))
})

app.post("/user", (req, res) => {

    const user = {
        name: req.body.name,

    };

    res.send(user)
})

app.post('/api-users', (req, res) => {
    res.status(200).send("OK, " + req.body.lastname);
 });
 

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})
