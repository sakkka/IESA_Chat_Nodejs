var exp = require('express')();
var http = require('http');


module.exports = function() {
	"use strict";

	return {
		_server : null,

		//init server

		create : function() {
			this._server = http.createServer(exp);

			this.route();
			this.listen(3000);
		},

		//listen on port

		listen : function(port) {
			this._server.listen(port, function() {
				console.log("SERVER: Listening on port: "+port);
			})
		},

		//create a route for index.html

		route : function() {
			exp.get('/', function(req, res) {
				res.sendFile(__dirname + "/index.html");
			});
		}
	}
}