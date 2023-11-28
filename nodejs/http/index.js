const http = require('http');


const server = http.createServer((req, res) => {
     if (req.url == '/'){
        res.write('<h1> Hello, Node.js</h1>')
     } else if (req.url == '/about')
        res.write('<h1> Hello, Node.js About</h1>')
     res.end();
})

server.listen(5005);

console.log("Http server is running on port 50000");