const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'server_launch_log.txt');
const serverPath = path.join(__dirname, 'server.js');

console.log("Launching server via debug runner...");
const server = spawn('node', [serverPath]);

const logStream = fs.createWriteStream(logFile);

server.stdout.pipe(logStream);
server.stderr.pipe(logStream);

server.on('close', (code) => {
    const exitMsg = `\nServer exited with code ${code}`;
    console.log(exitMsg);
    fs.appendFileSync(logFile, exitMsg);
});
