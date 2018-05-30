import React, { Component } from 'react';
import Tree from 'components/Tree';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', color: 'grey' }}>
        {/* <h3>Tree</h3> */}
        <Tree root="root">
          <Tree.Node />
          <Tree.Node />
          <Tree.Node label="greek">
            <Tree root="root"></Tree>
            <Tree.Node label="alpha" />
            <Tree.Node label="beta" />
            <Tree.Node label="gamma" />
          </Tree.Node>
          <Tree.Node />
        </Tree>
        <br/><br/>
        {/* <a href='https://github.com/RamvigneshPasupathy/react-tree' style={{ cursor: 'pointer', color: 'blue' }}>View Code on GitHub</a>
        <hr style={{ width: '60%' }}/>
        <p>Copyright &copy; 2018 Ramvignesh Pasupathy.</p> */}
      </div>
    );
  }
}

export default App;
