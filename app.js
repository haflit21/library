import express from 'express';
import bodyParser from 'body-parser';
import RouterCollection from './autoload';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
var routes = new RouterCollection(app);
var server = app.listen(3000, () => {
    console.log("Listening on port %s...", server.address().port);
});