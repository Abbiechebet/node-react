import { writeFile, readFile, copyFileSync } from 'fs';
// when importing from node module there is no dot (.)

writeFile('message.txt', "Hello World. Being part of Stutern and I4G community was an opportunuty to be grateful for.", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

copyFileSync('message.txt', 'msg.txt');

readFile('message.txt', { encoding: "utf-8" }, (err, data) => {
  // string "utf-8" or an object {encoding:"utf-8"}
  if (err) throw err;
  console.log(data);
});