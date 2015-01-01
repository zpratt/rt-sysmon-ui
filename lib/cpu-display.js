(function () {
    'use strict';

    var React = require('react'),
        lineGraph = require('./line-graph');

    module.exports = React.createClass({
        displayName: 'CpuDisplay',

        getInitialState: function () {
            return {
                loadData: [{
                    load: 0,
                    lastUpdateTs: 0
                }]
            };
        },

        componentDidMount: function() {
            var el = this.getDOMNode();

            lineGraph.create(el, 900, 600, this.state.loadData);
        },

        componentDidUpdate: function() {
            var el = this.getDOMNode();

            lineGraph.create(el, 900, 600, this.state.loadData);
        },

        render: function() {
            return React.DOM.div(null, [
                React.DOM.h2({className: 'title'}, this.props.title)
            ]);
        },

        shouldComponentUpdate: function (updatedProps, updatedState) {
            //return updatedState.load !== this.state.load;
            return true;
        }
    });
}());