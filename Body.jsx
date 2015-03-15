var React = require('react');
var Nav = require('./Nav');

require('./scss/main.scss');

var config = require('config');
if (config.site.theme.customStyles) {
  require('customStyles/' + config.site.theme.customStyles);
}

module.exports = React.createClass({
  displayName: 'Body',
  render: function() {
    return (
      <div>
        <main role="main">{this.props.children}</main>
        <GoogleAnalytics analyticsId={config.site.theme.analyticsId} />
      </div>
    )
  }
})
