const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views')); // specify the views directory
app.set('view engine', 'pug'); // register the template engine

app.use('/rsc',express.static(path.join(__dirname, 'public')));//lets the front end get resources

app.get('/',function(req,res)
{
    res.render('index');
});

app.use(function(err,req,res,next)
{
    res.send(err.toString());
});

app.listen('80');