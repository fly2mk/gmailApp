var React = require('react');
var ReactDOM = require('react-dom');
var InboxViewMsg = require('./InboxViewMsg');
var Link = require('react-router').Link;

var InboxWrapper = React.createClass({
  onAdd:function(){
    	$.ajax({
        url: "http://localhost:8080/addmailtodb",
        dataType: 'json',
        type: 'POST',
        data: this.props.allMsgs,
        success: function(data) {
          console.log("data instered in db");
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
  render: function () {
    return (
				<tbody>
					<tr className="active">
            <td>{this.props.allMsgs.msgFrom}</td>
            <td>{this.props.allMsgs.msgSubject}</td>
            <td>{this.props.allMsgs.msgReceivedOn}</td>
            <td>

<button type="button" className="btn btn-info" data-toggle="modal" data-target={"#myModal"+this.props.allMsgs.msgid}>Open</button>
            <button type="button" onClick={this.onAdd} className="btn btn-success">Add</button>
<div className="modal fade" id={"myModal"+this.props.allMsgs.msgid} role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <small>{this.props.allMsgs.msgReceivedOn}</small>
        <p>From : {this.props.allMsgs.msgFrom}</p>
        <h4 className="modal-title">{this.props.allMsgs.msgSubject}</h4>
      </div>
      <div className="modal-body">
        <p>{this.props.allMsgs.msgBody}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            </td>
					</tr>
				</tbody>

    );
  }
});

module.exports = InboxWrapper;
