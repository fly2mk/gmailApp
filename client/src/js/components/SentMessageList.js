var React = require('react');
var ReactDOM = require('react-dom');
var SentWrapper =require('./SentWrapper');

var SentMessageList = React.createClass({
  render: function () {
    return (
      <div className="SentMessageList">
        <h2> Sent Message data </h2>
          <SentWrapper />
      </div>);
}
});

module.exports = SentMessageList;
