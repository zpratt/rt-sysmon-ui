(function () {
    'use strict';

    var React = require('react');

    module.exports = React.createClass({
        displayName: 'CpuDisplay',

        getInitialState: function () {
            return {
                load: 0,
                lastUpdateTs: 0
            };
        },

        render: function() {
            return React.DOM.div(null, [
                React.DOM.h2({className: 'title'}, this.props.title),
                React.DOM.div(null, this.state.load),
                React.DOM.div(null, this.state.lastUpdateTs)
            ]);
        },

        shouldComponentUpdate: function (updatedProps, updatedState) {
            return updatedState.load !== this.state.load;
        }
    });
}());