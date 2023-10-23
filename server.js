const http = require("http")

let endpoints = {}

const server = http.createServer((req, res) => {
    let url = req.url
    serverEndRequest(res, "hi")
})

function run()
{
    server.listen(25565, "192.168.0.13", () => {
        console.log(`Server is listening at 192.168.0.13:25565`)
    })
}

function serverEndRequest(res, data="")
{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.write(data)
    res.end()
}

function setEndpoints(newEndpoints)
{
    endpoints = newEndpoints
}

module.exports = { run, setEndpoints }
