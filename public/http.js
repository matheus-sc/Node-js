const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // I can use all the types of headers in here
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    };
    
    /* This is a bad way to handle with HTML, since it's more difficult 
    
    to write, so it's better to have a HTML file instead
    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('<h1>Hello, ninjas!</h1>');
    res.write('<p>Hiring some ninjas for now</p>');
    res.end(); 
    */

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else res.end(data);
    })
});

server.listen(process.env.PORT || 3000, 'localhost', () => {
    console.log('Now listening for requests on port 3000');
});
