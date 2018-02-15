// Require orm module
var orm = require('../config/orm.js');

// Create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    // Select all orders
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    // Insert new order
    insertOne: function(colVal, cond, cb) {
        orm.insertOne('burgers', colVal, cond, function(res) {
            cb(res);
        });
    },
    // Update the order status
    updateOne: function(devourState, idNo, cb) {
        orm.updateOne('burgers', 'devoured', devourState, idNo, function(res) {
            cb(res);
        });
    }
};

// Export the burger module so the burgers_controller can access
module.exports = burger;


