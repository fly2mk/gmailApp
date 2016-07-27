var React = require('react');
var ReactDOM = require('react-dom');


var SentWrapper = React.createClass({

  render: function () {
    return (
      <div className="SentWrapper">
        <div className="container-fluid">
				  <input type="submit"  value="Add" />
			   </div>
			</div>
    );
  }
});

module.exports = SentWrapper;
