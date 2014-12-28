(function () {
    'use strict';

    var io = require('socket.io-client'),

        URL = 'http://localhost:8080',

        socket = io(URL);

    socket.on('cpu_update', function (data) {
        document.querySelector('body').innerHTML = data.totalUserTime;
    });
}());