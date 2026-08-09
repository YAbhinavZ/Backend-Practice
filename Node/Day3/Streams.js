const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    // 1.)  Downloading file in bad way
    // const file = fs.readFileSync("Sample.txt");

    // // Downloading file in good way
    // const readableStream = fs.createReadStream("Sample.txt");
    // readableStream.pipe(res);

   // 2.) Copying file in bad way
    // const file = fs.readFileSync("Sample.txt");
    // fs.writeFileSync("output.txt",file);        
    // res.end("File copied successfully");    res.end("File copied successfully");
 
    // Copying file in good way
    const readableStream = fs.createReadStream("Sample.txt");
    const writableStream = fs.createWriteStream("output.txt");
    readableStream.on("data",(chunk)=>{
        writableStream.write(chunk);

    })
    // readableStream.pipe(writableStream);
    


    // res.end(file);
});

server.listen(8080,()=>{
    console.log("Server is running on port 8080");
});


// Stream are of two types: Readable and Writable
//pipe() method is used to connect a readable stream to a writable stream.
//  It takes the readable stream as the first argument and the writable stream as the second argument.
//  The pipe() method returns the writable stream, so you can chain multiple pipe() calls together.
// request - Readable stream and response - Writable stream
