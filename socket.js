module.exports = function (app){

	"use strict";

	return {
		_io : null,

		init : function() {
			this._io = require("socket.io")(app.server._server);

			this.listen();
		},

		listen : function() {
			this._io.on('connection', function(socket){ 

				console.log("SERVER: Incomming connexion !!");

				socket.on('msg', function(content){
					console.log(content);

					socket.emit('confirm', "super reponse du server");
				});

		 	});
		}
	}

}