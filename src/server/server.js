// Ref: http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var port = 7777;
var router = express.Router();
var webAppDir = createSystemFileName('../../public/');
var apiRouterPrefix = '/api';

// given a file name path relative to this directory, create an absolute path
function createSystemFileName(fileName) {
    return path.resolve(path.join(__dirname, fileName));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// currently, we are fixed to the dev distribution:
app.use(express.static(webAppDir));
// configure router to handle specific prefix in the path
app.use(apiRouterPrefix, router);
app.listen(port);

console.log('Web app dir:', webAppDir);
console.log('Logging only service API calls');
console.log('Open browser at: http://127.0.0.1:' + port + '/');
