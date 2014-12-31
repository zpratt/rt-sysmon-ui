(function () {
    'use strict';

    var io = require('socket.io-client'),
        React = require('react'),

        CpuDisplay = require('./lib/cpu-display'),

        URL = 'http://localhost:8080',
        socket = io(URL);

    var el = React.createElement(CpuDisplay, {name: "World"});

    var rendered = React.render(el, document.body);

    socket.on('cpu_update', function (data) {
        rendered.setState({
            load: data.totalUserTime
        });
    });

    window.rendered = rendered;
}());