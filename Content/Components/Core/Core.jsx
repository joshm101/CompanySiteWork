var React = require('react');
var DummyComponent = require('../DummyComponent/DummyComponent')

class Core extends React.Component {
  render() {
    return (
      <div className="core">
        <DummyComponent></DummyComponent>
      </div>
    );
  }
}

module.exports = Core;
