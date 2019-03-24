
const express = require("express");
const http = require('http');
const path = require('path');


const app = express();

app.use(express.static(__dirname + '/build'));
app.get(`/*`, (req, res) => {
  const templateFile = path.join(__dirname, './build/index.html');

  res.sendFile(templateFile);
  // fs.readFile(templateFile, (err, data) => {
  //   const content = data.toString();
  //   const values = {};
  //   const finalHTML = mustache.to_html(content, values);
  //   res.send(finalHTML);
  // });
});

http.createServer(app).listen(8080, () => {
  console.log(`Server is now running on port: 8080`);
})