var React = require('react');

module.exports = React.createClass({
  propTypes: {
    analyticsId: React.PropTypes.string
  },
  render: function() {
    var content = this.getScriptContent();
    return (
        <script dangerouslySetInnerHtml={content}></script>
    )
  },
  getScriptContent: function() {
    var id = this.props.analyticsId;
    if (id) {
      return "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', '"
        + id + "', 'auto');ga('send', 'pageview');"
    } else {
      return "";
    }
  }
})