var React = require('react');
var {Link} = require('react-router');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
  <h1 className="text-center">About Component</h1>
    <p>We are <span className="badge">#1</span> in customer satisfaction</p>
</div>
  )
};
module.exports = About;
