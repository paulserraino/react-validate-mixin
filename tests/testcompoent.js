var React = require('react')
var mixin = require('../mixin')

module.exports = React.createClass({
  mixins: [mixin],
  getInitialState: function () {
    return { value: this.props.value || '' };
  },

  setValue: function (v) {
    this.setState({ value: v });
  },

  render: function () {
    return (<div>hello</div>)
  }
})