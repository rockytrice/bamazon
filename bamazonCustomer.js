var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
})
// connecting to bamazon database
connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    customerOrder();
});





// questions for ordering a product
function customerOrder() {
    inquirer
        .prompt([
            {
                name: "order",
                type: "input",
                message: "What's the  ID of the product  would you like to buy?"
            },
            {
                name: "buy",
                type: "input",
                message: "How many units would you like to buy?"
            }

        ])
        
}


