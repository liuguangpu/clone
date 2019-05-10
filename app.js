//let faker = require('faker');
//console.log(faker.internet.email());
//console.log(faker.date.past());
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    passward:'971128',
    database:'test'
});
connection.connect();
let q = 'select * from users as solution';
connection.require(q,function(error,results,fleds){
    if(error)throw error;
    console.log(results[0]);
});