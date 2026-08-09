// Mini Practice Challenge 💻

// Create a program that:

// Creates a file called student.txt.
// Writes your name into it.
// Appends "Learning Node.js".
// Reads and prints the file contents.
// Renames it to profile.txt.
// Deletes profile.txt.
const fs = require('fs');

fs.writeFileSync('student.txt',"Abhinav Sharma");
fs.appendFileSync('student.txt',"\nLearning Node.js");
const res = fs.readFileSync('student.txt','utf-8');
fs.renameSync('student.txt','profile.txt');
fs.unlink('profile.txt',(err)=>{
    if(err){
        console.log(err);
    }
});
