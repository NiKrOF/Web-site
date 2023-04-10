let express = require('express');
let app = express();
app.get('/', function(req, res) {
  res.sendfile('products.html');
});
app.use(express.static(__dirname + '/public'));
app.listen(8081);