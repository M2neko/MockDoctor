var express = require('express');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var infoRouter = require('./routes/info');

var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/info', infoRouter);
// app.get('/', function(req, res){
//     res.render('index');
// });

app.listen(app.get('port'), function() {
});