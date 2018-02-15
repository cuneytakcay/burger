var connection = require("./connection.js");

// Try to use callback function instead of console.log in here
var orm = {
	selectAll: function(table, cb) {
		var queryString = 'SELECT * FROM ' + table;
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
			console.log(queryString);			
		});
	},
	insertOne: function(table, nameVal, devouredVal, cb) {
		var queryString = 'INSERT INTO ' + table + ' (burger_name, devoured) VALUES ("'+ nameVal +'", "'+ devouredVal +'")';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
			console.log(queryString);
		});
	},
	updateOne: function(table, colName, state, id, cb) {
		var queryString = 'UPDATE ' + table + ' SET ' + colName + ' = ' + state + ' WHERE id = ' + id;
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
			console.log(queryString);			
		});
	}
};

module.exports = orm;

//INSERT INTO table (burger_name, devoured) VALUES (nameVal, devouredVal);