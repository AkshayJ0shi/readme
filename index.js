const http = require("http")
const port = 5000



const server = http.createServer((req,res) => {
    console.log(`running on ${port}`)
    res.write("<h1>Hello theres</h1>")
    res.end()
})

server.listen(port)