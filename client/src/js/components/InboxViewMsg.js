var React= require('react');
var ReactDom = require('react-dom');
var InboxViewMsg = React.createClass({
  getInitialState: function(){
       return{AllData:[]}
    },
    loadMsgData:function(){
      $.ajax({
    url:"http://localhost:8080/data/emaildata.json",
    type:'GET',
    datatype:"JSON",
    success: function(data)
    {
      console.log('IDMSG',this.props.location.query.id);


      for(i=0;i<data.length;i++){
        if(data[i].msgid==this.props.location.query.id){
          this.setState({AllData:data[i]});
        }
      }
          console.log(this.state.AllData);
      //this.setState({AllData:data});

    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });
    },
    componentWillMount: function(){
    this.loadMsgData(this.props.location.query.id);
 },

  render: function() {
    return (
    <div className="col-md-10 mid-section">
			<h3>{this.state.AllData.msgBody}</h3>
			<span className="msg-header-left">{this.state.AllData.msgFrom}</span>
			<span className="msg-header-right">{this.state.AllData.msgBody}</span>

			<p>

			</p>

		</div>



    );
  }
});

module.exports = InboxViewMsg;
