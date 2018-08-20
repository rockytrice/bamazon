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
                name: "quantity",
                type: "input",
                message: "How many units would you like to buy?"
            }

        ])
        .then(function (answers) {
            // console.log("item id: " + answers.order);
            // console.log('quantity: ' + answers.quantity);
             var query = "SELECT item_id,price,product_name,stock_quantity FROM products WHERE ?";
             connection.query(query, {item_id:answers.order}, function (err, res) {
                 if (err) throw err

                if (res.length === 0) {
                    console.log("Please enter a valid product ID");
                    customerOrder();
                    
                }
                // checking if the store has enough product to meet the request
                if(res[0].stock_quantity > answers.quantity){
                    console.log("Product is in stock and your order has been placed");
                   var quantityUpdate = 'UPDATE products SET stock_quantity=' + (res[0].stock_quantity - answers.quantity) + ' WHERE item_id= ' + answers.order;
                    connection.query(quantityUpdate,function(err,res){
                        if(err) throw err
                        console.log("Your order has been placed");
                        console.log('quantityUpdate = ' + quantityUpdate);
                    })
                }
                else{
                    console.log("Your order can not be completed.There is not enough product in stock. Please update your order");
                    
                }
             })


        })
}














// else  {
//     var productQuantity = res[0];
//     console.log("product quantity is" + productQuantity.stock_quantity);

//     if (quantity <= productQuantity.stock_quantity) {
//         console.log(' the product you requested is in stock! Placing order!');

//     }
//     connection.end();

// };