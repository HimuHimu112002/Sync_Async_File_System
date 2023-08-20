console.log("hello")
const fs = require('fs');
const http = require('http')


let server = http.createServer(function(req, res){

    //Ays readFile ============
    // if(req.url = "/"){
    //     fs.readFile('Home.html', function(error, data){
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.write(data);
    //         res.end();
    //     });

    // }

    //Ays writeFile ============
    // if(req.url = "/"){
    //     fs.writeFile('demo.html','Hello himu', function(error){
    //         if(error){

    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File write fail");
    //             res.end();
    //         }else{
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File write success");
    //             res.end();
    //         }
            
    //     });

    // }


    //Ays remane ============
    // if(req.url = "/"){
    //     fs.rename('demo.html','demo.txt', function(error){
    //         if(error){

    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File rename fail");
    //             res.end();
    //         }else{
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File rename success");
    //             res.end();
    //         }
            
    //     });

    // }


    //Ays delete ============
    // if(req.url = "/"){
    //     fs.unlink('demo.txt', function(error){
    //         if(error){

    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File delete fail");
    //             res.end();
    //         }else{
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File delete success");
    //             res.end();
    //         }
            
    //     });

    // }

    //Sync readFile==================
    // if(req.url == "/"){
    //     let allData = fs.readFileSync('Home.html')
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(allData);
    //     res.end();

    // }


    //Sync writeFile ============
    // if(req.url = "/"){
    //     let error = fs.writeFileSync('demoSync.html','Hello himu sync')
    //         if(error){

    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File write fail");
    //             res.end();
    //         }else{
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File write success");
    //             res.end();
    //         }

    // }


    //Sync remane ============
    // if(req.url = "/"){
    //     let error = fs.renameSync('demoSync.html','demoSync.txt')
    //         if(error){

    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File rename fail");
    //             res.end();
    //         }else{
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File rename success");
    //             res.end();
    //         }
    // } 


    //Sync delete ============
    // if(req.url = "/"){
    //     let error = fs.unlinkSync('demo.html')
    //         if(error){

    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File delete fail");
    //             res.end();
    //         }else{
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.write("File delete success");
    //             res.end();
    //         }
            
    // }


})

server.listen(4040)
console.log("server success")