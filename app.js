const express = require('express')
const app = express()
const gallery = require('./routes/gallery');

const port = 3000



app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('par');
});
// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', gallery);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))