const express = require('express')
// const bodyParser = require('body-parser')
// const require('cookie-parse')
// const require('cookiesession')
// const expressStatic = require('express-static')

let server = express()
server.listen(8080)

// cookie
server.use('/',(req,res) => {
    res.cookie('user','zhangyingji',{path: '/',maxAge:30*24*3600*1000})
    res.send('ok')
})

