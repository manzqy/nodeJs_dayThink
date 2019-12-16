const http = require('http')
const fs = require('fs')
const path = require('path')
const template = require('art-template')

const app = http.createServer()

app.listen(3003, '127.0.0.1', () => {
    console.log('server is running at http://127.0.0.1:3003');
    
})

app.on('request', function(req, res) {
    let method = req.method;
    let url = req.url;

    if (method == 'GET' && url.endsWith('.html')) {
        fs.readFile(path.join(__dirname, '/views', url), function(err, data) {
            res.end(data)
        })
    } else if (method == 'GET' && url.startsWith('/node_modules')) {
        fs.readFile(path.join(__dirname, url), 'utf8', function(err, data) {
            res.end(data)
        })
    }
})
