var mysql = require("mysql");

// to use console.table first npm install console.table --save 
// this is not something you need to attach to a variable
require("console.table");

// making the SQL connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "",
    database: "films_db"
});

// conneting to our database
connection.connect(function(err) {
    if (err) throw err;
    // after we connect log out our id
    console.log("Connected as id " + connection.threadId);
    // then call the afterConnection function
    afterConnection();
});

function afterConnection() {
    // this will select all of our columns and records from films
    connection.query("SELECT * FROM films", function (err, res) {
        if (err) throw err;
        // console.table will make a pretty version of our console.log
        console.table(res);
        // get a single record after getting all records from the db
        getSingleRecord(1);
        
    });
}

function getSingleRecord(idNumber) {
    // When we use the ? this is like have a paramter for mysql package 
    // to pick up on 
    // so in this case our question mark is looking for the id of the single 
    // record we are seeking out
    connection.query("SELECT * FROM films WHERE ?", {id: idNumber}, function(err, res){
        if(err) throw err;
        // get us our result(res) in this case
        console.table(res);
    });
}