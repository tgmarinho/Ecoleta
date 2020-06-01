var express_1 = require('express');
var app = express_1["default"]();
app.get('/', function () {
    console.log('Listagem de usuários');
});
app.listen(3333);
