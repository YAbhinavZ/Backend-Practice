const path = require("path");   
const filePath = path.join("/folder","subfolder", "file.txt"); // /folder/subfolder/file.txt
const resolvedPath = path.resolve(filePath); 
const ext = path.extname(filePath);
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);
// console.log({
//     filePath,
//     resolvedPath,
//     ext,
//     baseName,
//     dirName
// });

const eventEmitter = require("events");     

// on(eventName,Listener) - Create
// emit(eventName, [args]) - execute

const emitter = new eventEmitter();

emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.emit("greet", "Abhinav");

// !OBJECTIVE
// * CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:
// LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN, LOGOUT, PURCHASE, AND PROFILE UPDATE)
// TRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARRY EVENT IS TRIGGERED
const fs = require("fs");
const userEmitter = new eventEmitter();
const eventCounts = {
    login: 0,
    logout: 0,
    purchase: 0,
    profileUpdate: 0    
};
const logFile = "event_log.json";
if(fs.existsSync(logFile)) {
    const data = fs.readFileSync(logFile, "utf-8");
    Object.assign(eventCounts, JSON.parse(data));
}
function saveCounts(){
    fs.writeFileSync(logFile, JSON.stringify(eventCounts, null, 2));
}

userEmitter.on("login", (username) => {
    console.log(`User ${username} logged in`);
    eventCounts.login++;
    saveCounts();
});

userEmitter.on("logout", (username) => {
    console.log(`User ${username} logged out`);
    eventCounts.logout++;
    saveCounts();
});

userEmitter.on("purchase", (user ,item) => {
    console.log( `User ${user} purchased ${item}`);
    eventCounts.purchase++;
    saveCounts();
});

userEmitter.on("profileUpdate", (user) => {
    console.log( `User ${user} updated their profile`);
    eventCounts.profileUpdate++;
    saveCounts();
});
userEmitter.on("summary", () => {
    console.log("Event Summary:");
    console.log(`Login events: ${eventCounts.login}`);
    console.log(`Logout events: ${eventCounts.logout}`);
    console.log(`Purchase events: ${eventCounts.purchase}`);
    console.log(`Profile Update events: ${eventCounts.profileUpdate}`);
});






userEmitter.emit("login", "Abhinav");
userEmitter.emit("purchase", "Abhinav", "Laptop");
userEmitter.emit("profileUpdate", "Abhinav");
userEmitter.emit("logout", "Abhinav");
userEmitter.emit("summary");




