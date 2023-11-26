const http = require('http');

const PORT = 3022;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) =>{
    res.statusCode = 500;
    res.setHeader('Context-Type', 'application/json')
    res.end('Node server created by Himanshu Yadav!')
});

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}: ${PORT}`);
})