const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/text'){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello, World 1!\n');
    }else if(req.url==='/html'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello, World 2!\n');
    }else if(req.url==='/json'){
    res.writeHead(200,{'Content-Type':'text/json'});
    res.end('Hello, World 3!\n');
    } else{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello, World!\n');
    }
   
});



server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/');
});