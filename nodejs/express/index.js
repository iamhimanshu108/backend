const express = require("express");

const app = express();

const PORT = 4010;
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.get('/about', (req, res) => {
    res.send("Hello World! BAout World")
});

app.get('/contact', (req, res) => {
    res.send("Hello World! constcat")
});

app.get('/blog', (req, res) => {
    res.send("Hello World!  BLOG")
});


app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}: ${PORT}`);
})