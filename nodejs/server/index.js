const http = require('http');

const PORT = 3030;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) =>{

    //Home Page
    // About PAge
    // Conatact PAge
    // Product PAge
    // Rest... > Error

    if (req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Context-Type', 'text/plain')
        res.end("Welcome to Node JS Server Home") 
        
    }else if (req.url == '/about'){
        res.statusCode = 200;
        res.setHeader('Context-Type', 'text/plain')
        res.end("Welcome to Node JS Server About")
        
    } else if (req.url == '/contact'){
        res.statusCode = 200;
        res.setHeader('Context-Type', 'text/plain')
        res.end("Welcome to Node JS Server Conatact")
    } else if (req.url == '/product'){
        res.statusCode = 200;
        res.setHeader('Context-Type', 'application/json')
        res.end(JSON.stringify({productName: "Product 1"})) 
    } else {
        res.statusCode = 500;
        res.setHeader('Context-Type', 'text/plain')
        res.end('Error!')
    }

    
});

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}: ${PORT}`);
})