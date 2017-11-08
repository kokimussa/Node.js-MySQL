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
	createTable();
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
       	console.log(answer)

		var query = 'SELECT * FROM products WHERE id = ?';

		connection.query(query, [parseInt(answer.id)], function(err, res) {
	
			console.log("Testing: ", res);
		
			runInquirer();
		})
})
}


var createTable  = function(){
    connection.query("SELECT * FROM products", function(err,res){
    for(var i=0; i<res.length; i++){
    	console.log(res[i].id+"|| "+res[i].product_name+" ||"+
                    res[i].department_name+"|| "+res[i].price+" ||"+ res[i].stock_quantity+"\n");
    }

	runInquirer();


})
}
