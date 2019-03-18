'use strict'

// 引入模块
const http = require('http');

let server = http.createServer((req,res) => {
	res.write('abc');
	res.end();
});

// 监听
server.listen(8080)