var React= require('react');
var {render} = require('react-dom');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');
var home = require('./components/home');
var TopPanel = require('./components/TopPanel');
var MailLabels = require('./components/MailLabels');
var Inbox = require('./components/Inbox');
var Sent = require('./components/Sent');
var InboxList = require('./components/InboxList');
var InboxWrapper = require('./components/InboxWrapper');
var InboxViewMsg = require('./components/InboxViewMsg');


var MainComponent = React.createClass({
  render: function() {
    return (
      <div className ="MainComponent container-fluid">
      <TopPanel/>
      <div className="row">
      <MailLabels/>
      {this.props.children}
      </div>
      </div>
    );
  }
});

render(
  <Router history={browserHistory}>
  <Route path="/" component={MainComponent} >
    <IndexRoute component={Inbox}/>
     <Route path = "Inbox" component={Inbox} />
      <Route path="msg" component={InboxViewMsg}/>
      <Route path="msg/:id" handler={InboxViewMsg}/>
     <Route path = "Sent" component={Sent} />

  </Route>
  </Router>,
  document.getElementById('app')
);
