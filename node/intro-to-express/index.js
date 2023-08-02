import express from 'express';
import pkg from 'body-parser';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
//import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const { urlencoded } = pkg;

app.use(urlencoded({extended:true}))

app.get("/", function(req, res) {
  //res.send("<h1>Hello World</h1>");
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get("/about", function(req, res) {
  res.send("<h1>Shaurya Sinha</h1>");
})

app.post("/", function(req, res) {
  // they are strings so they'll be concatenated
  // var t1 = req.body.n1;     20
  // var t2 = req.body.n2;     100
  //var result = t1 + t2;      20100
  var t1 = Number(req.body.n1);
  var t2 = Number(req.body.n2);
  var result = t1 + t2;
  res.send("The result of calculation is: " + result);
})
 
app.listen(3000, function() {
  console.log('server running at port 3000');
});