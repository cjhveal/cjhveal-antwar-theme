var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Paths = require('antwar-core/PathsMixin');
var _ = require('lodash');

module.exports = React.createClass({
  mixins: [
    Router.State,
    Paths
  ],

  render: function() {
    return (
      <div>
        <h1> Wow it is a blog! </h1>
      </div>
    )
  }
});
