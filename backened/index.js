const express = require('express')
const cors = require('cors')
const app = express()
const port = 6247

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const user = [
    {
        name: "Bilal",
        age: 21
    },
    {
        name: "Sagar",
        age: 25
    },
]

app.post('/', (req, res) => {

    const userFound = user.find((obj) => { return obj.name == req.body.name && obj.age == req.body.age });
    if (userFound) {
        res.send("user already registered");
    }
    else {
        user.push(req.body);
        res.json(user);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})