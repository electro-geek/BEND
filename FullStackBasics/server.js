import express from 'express';
// require('dotenv').config()



const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Site is up")
})

app.get('/login', (req, res) => {
    res.send("This is a login page")
})

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            content: "This is joke1"
        },
        {
            id: 2,
            content: "This is something"
        },
        {
            id: 3,
            content: "This is something 3"
        }
    ]
    res.send(jokes)
})

app.listen(PORT, () => {
    console.log("Serve at http://localhost:");
})