var React= require('react');
var ReactDom = require('react-dom');
var Link = require('react-router').Link;
/*var allMovies = require('/allMovies');
var addMovies = require('/addMovies');
var home = require('/home');*/

var MailLabels = React.createClass({
render:function()
{
  return(

    <div className="MailLabels col-md-1 left-panel">

      <ul >
        <li><Link to = "/Inbox">Inbox</Link></li>
        <li><Link to = "/Sent">Sent</Link></li>
      </ul>
    </div>

    );

  }
 });

module.exports = MailLabels;
