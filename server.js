const http = require("http")

let endpoints = {}

const server = http.createServer((req, res) => {
    let url = req.url
    for (let string of Object.keys(endpoints.match))
    {
        let output = endpoints.match[string]
        if (url == string)
        {
            serverEndRequest(res, output)
            return
        }
    }

    for (let string of Object.keys(endpoints.javascript))
    {
        let script = endpoints.javascript[string]
        if (url == string)
        {
            serverEndRequest(res, eval("(() => {%SCRIPTS%})()".replace("%SCRIPTS%", script)).toString())
            return
        }
    }


    serverEndRequest(res, "404 :(")
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
