var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '4243',
    database : 'student'    
});
module.exports = connection;