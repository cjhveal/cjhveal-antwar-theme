var React = require('react');
var Router = require('react-router');
var Paths = require('antwar-core/PathsMixin');
var BlogLink = require('antwar-core/BlogLink');
var _ = require('lodash');

var Link = Router.Link;

var Blog = React.createClass({

  mixins: [ Router.State, Paths ],
  render: function() {
    var posts = _.map(_.sortBy(this.getAllPosts(), 'date').reverse(), function(post, i) {
      return <li key={'post-' + i}>
        <h3>
          <BlogLink post={post}>{post.title}</BlogLink>
          {post.draft ? <span>Draft</span> : null}
        </h3>

        <span>{post.date}</span>
        <p>{post.preview}</p>
      </li>
    });
    return (
      <div>
        <h1>Blog Posts</h1>
        <ul>{posts}</ul>
      </div>
    );
  }

});

module.exports = Blog;