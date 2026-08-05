const path = require("path");       
 


const filePath = path.join("/folder","subfolder", "file.txt"); // /folder/subfolder/file.txt
const resolvedPath = path.resolve(filePath); 
const ext = path.extname(filePath);
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);

console.log({
    filePath,
    resolvedPath,
    ext,
    baseName,
    dirName
});

