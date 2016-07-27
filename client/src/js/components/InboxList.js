var React = require('react');
var ReactDOM = require('react-dom');
var InboxWrapper =require('./InboxWrapper');

var InboxList = React.createClass({
render: function() {
    var msgNodes = this.props.allData.map(function(msg) {
       return (
         <InboxWrapper allMsgs={msg} key={msg.msgid}>
         </InboxWrapper>
        );
      });

       return(
      <div className="inboxMessageList col-md-11 mid-section">

      <table className="table">
				<thead>
					<tr>
            <th>From</th>
  					<th>Subject</th>
  					<th>Date Time</th>
            <th>Action</th>
          </tr>
				</thead>
          {msgNodes}
        </table>

      </div>
    );

  }


});

module.exports = InboxList;
