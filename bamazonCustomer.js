var mysql = require("mysql");

var inquirer = require("inquirer");

const cTable = require('console.table');

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
    // showInventory();
    customerOrder();

});


// functions-------------------------------------------------------------------------------------------------------------------
// questions for ordering a product
function customerOrder() {


    inquirer
        .prompt([{
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
        .then(function (input) {
            var item = input.item_id;
            var quanity = input.quanity;
            var query = "SELECT FROM products WHERE ?";
            connection.query(query, {
                item_id: item
            }, function (err, res) {
                if (err) throw err;


            });


        });



}