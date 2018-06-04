var mysql = require('mysql');

 //create a connection pool for persitant connection
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tda_db',
    debug: false,
});
 
// establish connection to DB
connection.getConnection((err,connect)=>{
    if(err)
    console.log('not able to connect. Error occured while connecting')
    console.log('connection established')
})

//export the connection object
module.exports=connection;
