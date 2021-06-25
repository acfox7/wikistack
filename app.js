const express = require('express');
const app = express();

const layout = require('./views/layout');

app.use(express.static('wikistack/public'))

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  console.log("hello world");
  res.send(layout(''));
})



const PORT = 3000;
app.listen(PORT, function (PORT)
{`listening on port ${PORT}`})
