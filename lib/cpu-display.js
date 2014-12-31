(function () {
    'use strict';

    var React = require('react');

    module.exports = React.createClass({
        displayName: 'CpuDisplay',

        getInitialState: function () {
            return {
                load: 0
            };
        },

        render: function() {
            return React.DOM.div(null, this.state.load);
        },

        shouldComponentUpdate: function (updatedProps, updatedState) {
            return updatedState.load !== this.state.load;
        }
    });
}());