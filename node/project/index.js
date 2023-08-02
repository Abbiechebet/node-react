import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
//import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

var userIsAuth = false;

function userCheck (req, res, next){
  const password = req.body["password"];
  if (password === "DevTown"){
    userIsAuth = true;
  }
  next();
}

app.use(userCheck);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// app.get('/', function(req, res) {
//     res.sendFile(join(__dirname, '/index.html'));
// });

app.post("/check", (req, res) => {
  if (userIsAuth){
     res.sendFile(path.join(__dirname, '/secret.html'))
  }
  else{
     res.sendFile(path.join(__dirname, '/index.html'))
  }
})
 
app.listen(3000, () => {
  console.log('server running at port 3000');
});