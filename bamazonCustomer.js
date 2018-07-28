var mysql = require("mysql");
var inquirer = require("inquirer");
var colors = require("colors/safe");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    password: " ",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    market();
})

function market() {
    console.log("\nAvailable Products: \n");
    connection.query("SELECT * FROM products", function (err, results) {
       
        if (err) throw (err);

        inquirer.prompt([
            {
                name: "purchasePrompt",
                type: "rawlist",
                choices: function () {
                    var choiceArray = [];
                    for (var i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].product_name + " $" + results[i].price + " Dept: " + results[i].department_name);
                    }
                    return choiceArray;
                },
            message: "What would you like to buy?"
        },
        {
            name: "amount",
            type: "input",
            message: "How many would you like to buy?"
        }
        ])
        .then(function(answer) {
            var chosenItem;

            for (var i = 0; i < results.length; i++) {
                if (results[i].product_name + " $" + results[i].price + " Dept: " + results[i].department_name === answer.purchasePrompt) {
                    chosenItem = results[i];
                }
            }
            if (chosenItem.stock_quantity >= parseInt(answer.amount)) {
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: chosenItem.stock_quantity - answer.amount
                        },
                        {
                            id: chosenItem.id
                        }
                    ],
                    function(err) {
                        if (err) throw (err);
                        console.log("\n---------------------------------------------------------");
                        console.log(colors.green.bold("\nThank you for your purchase of item " + chosenItem.product_name + "."));
                        console.log(colors.cyan.bold("$" + chosenItem.price * answer.amount + " Will be charged to your account.\n"));
                        console.log("---------------------------------------------------------");
                        market();
                    }
                );
            }
            else {
                console.log("\n---------------------------------------------------------");
                console.log(colors.red.bold("\nThere is not enough inventory to complete the order for " + chosenItem.product_name + ". \n"));
                console.log("---------------------------------------------------------");
                market();
            }
        });
    });
}