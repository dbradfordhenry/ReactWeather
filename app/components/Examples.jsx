var React = require('react');

var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
    <h1 className="text-center page-title">Examples!</h1>
    <p>Here are are few example locations to try out</p>
    <ol>
      <li>
        <Link to='/?location=Boston'>Boston, MA</Link>
      </li>
      <li>
        <Link to='/?location=Hartford'>Hartford, CT</Link>
    </li>
    </ol>
  </div>
  )
};
module.exports = Examples;
