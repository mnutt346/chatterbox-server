var Parse = {

  server: `http://127.0.0.1:3000/`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};