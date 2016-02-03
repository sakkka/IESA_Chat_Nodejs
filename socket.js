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

				socket.on('chatMsg', app.messages.receive());

		 	});
		},

		emit : function (chan, content) {
			app.socket._io.emit(chan, content);
		}
	}

}