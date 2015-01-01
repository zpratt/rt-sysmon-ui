(function () {
    'use strict';
    
    var d3 = require('d3'),

        svg,
        xAxisLine,
        yAxisLine,
        path;

    var margin = {top: 20, right: 20, bottom: 30, left: 50};

    //var parseDate = d3.time.format('%d-%b-%y').parse;

    function makeGraph(domElement, width, height, data) {
        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom');

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left');

        var line = d3.svg.line()
            .x(function(d) {
                return x(d.lastUpdateTs);
            })
            .y(function(d) {
                return y(d.load);
            });

        if (!svg) {
            svg = d3.select(domElement).append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            xAxisLine = svg.append('g')
                .attr('class', 'cpu-load-points')
                .attr('transform', 'translate(0,' + height + ')');

            yAxisLine = svg.append('g')
                .attr('class', 'yAxis')
                .call(yAxis)
                .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 6)
                .attr('dy', '.71em')
                .style('text-anchor', 'end')
                .text('CPU Load');

            path = svg.append('path')
                .attr('class', 'line');
        }

        x.domain(d3.extent(data, function(d) {
            return d.lastUpdateTs;
        }));

        y.domain(d3.extent(data, function(d) {
            return d.load;
        }));

        xAxisLine.call(xAxis);

        path
            .data(data)
            .attr('d', line(data));
    }

    module.exports = {
        create: makeGraph
    };
}());