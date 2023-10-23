console.log("starting server...")

let cors_port = 6969

let cors = require("./cors.js")
cors.start(cors_port)

let fs = require("fs");
let endpoints = JSON.parse(fs.readFileSync("endpoints.json", "utf8")).endpoints

let server = require("./server.js")
server.setEndpoints(endpoints)
server.run()
