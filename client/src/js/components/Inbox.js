var React= require('react');
var ReactDom = require('react-dom');
var InboxList = require('./InboxList');

var Inbox = React.createClass({

  getInitialState: function(){
       return{AllData:[]}
    },
    loadData:function(){
      $.ajax({
    url:"http://localhost:8080/data/emaildata.json",
    type:'GET',
    datatype:"JSON",
    success: function(data)
    {
      console.log(data);
      this.setState({AllData:data});

    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });
    },
    componentWillMount: function(){
   this.loadData();
 },
  render: function() {
    return (
     <div>
          <InboxList allData = {this.state.AllData} />
    </div>


    );
  }
});

module.exports = Inbox;
