const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;
//set Handlebars Middleware

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


const otherstuff =" Hello there , this is other stuff"

//set handlebars routes
app.get('/', function (req, res) {
    res.render('home',{
        stuff: otherstuff
    });
});

//Set static folder
app.use(express.static(path.join(__dirname,'public')));


app.listen(PORT,() => console.log('server Listening on port' + PORT ));