var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazondb"
})

connection.connect(function(err) {

	console.log('Connected to bamazondb on Port 3306');
	runInquirer();
})


var questions = [
	{
		name: 'id',
		type: 'input',
		message: 'Please enter product ID'
	},
	{
		name: 'stock_quantity',
		type: 'input',
		message: 'Please enter desired quantity'
	}
];

var runInquirer = function() {

       inquirer.prompt(questions).then(function(answer) {

		var query = 'SELECT id, product_name, department_name, price, stock_quantity FROM bamazondb.products WHERE ?';

		connection.query(query, {ItemID:answer.item}, function(err, res) {
	
			if (res.length == 0) {
				console.log('Invalid item');
			}
		
		if (res[0].stock_quantity >= answer.quantity) {
				var updatedQuantity = res[0].stock_quantity - answer.quantity;
				console.log('Your total cost of buying ' + answer.quantity + ' units of ' + 
					res[0].product_name + ' is $' + (answer.quantity * res[0].price).toFixed(2));
				connection.query('UPDATE bamazondb.products SET ? WHERE ?', 
					[{
						stock_qantity: updatedQuantity
					},
					{
						iD: answer.item
					}], function(err, res) {
					console.log('Database updated');
				});

				connection.end();
			} else {
				console.log('Insufficient quantity!');
			}
			runInquirer();
		})
	})
}
