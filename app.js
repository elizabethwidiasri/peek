const express = require('express')
const app = express()
const routes = require('./routes/');
// const gallery = require('./routes/gallery');
// const user = require('./routes/user');
const port = 3000

app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static('public'));
app.use('/', routes);
// app.use('/', user);
// app.use('/gallery', gallery);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))