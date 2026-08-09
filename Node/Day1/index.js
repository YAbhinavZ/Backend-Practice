import http from "http"
import fs from "fs"
const PORT = 8080;

const myServer = http.createServer((request,response)=>{
       const Log = `${Date.now()} : New Request Received \n`
       fs.appendFile("log.txt",Log,(err)=>{
        if(err){
            console.error(err);
            response.statusCode = 500;
            response.end("Internal Server error");

        }
        response.end("Hello from the server");

       });
})
myServer.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON PORT 8080");
})