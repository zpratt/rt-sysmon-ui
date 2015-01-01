(function () {
    'use strict';

    var io = require('socket.io-client'),
        React = require('react'),

        CpuDisplay = require('./lib/cpu-display'),
        CpuLoadModel = require('./lib/cpu-load-model'),

        URL = 'http://localhost:8080',
        socket = io(URL);

    function init() {
        var loadStack = [],
            cpuLoadModel = new CpuLoadModel({
                load: 0,
                lastUpdateTs: Date.now()
            }),
            cpuDisplayComponent = React.render(
                React.createElement(CpuDisplay, {title: "Total User Time"}),
                document.body
            );

        socket.on('cpu_update', function (data) {
            cpuLoadModel.set(data);
            loadStack.push(cpuLoadModel.toJSON());

            cpuDisplayComponent.setState({
                loadData: loadStack
            });
        });

        window.rendered = cpuDisplayComponent;
    }

    init();
}());