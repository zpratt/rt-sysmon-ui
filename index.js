(function () {
    'use strict';

    var io = require('socket.io-client'),
        React = require('react'),

        CpuDisplay = require('./lib/cpu-display'),

        URL = 'http://localhost:8080',
        socket = io(URL);

    function init() {
        var rendered = React.render(
            React.createElement(CpuDisplay, {title: "Total User Time"}),
            document.body
        );

        socket.on('cpu_update', function (data) {
            rendered.setState({
                load: data.totalUserTime
            });
        });

        window.rendered = rendered;
    }

    init();
}());