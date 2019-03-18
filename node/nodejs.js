const http = require('http');
const fs = require('fs')


http.createServer((req,res) => {
	res.write('abc');
	res.end();
}).listen(8080)


// fs

// fs.readFile('fs.txt',(err,data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })
// fs.writeFile('fs.txt','fsfs',err => {
//     console.log(err)
// })

