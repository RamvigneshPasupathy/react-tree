import React, { Component } from 'react';
import Tree from 'components/Tree';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', color: 'grey' }}>
        <h3><u>Tree</u></h3>
        <Tree />
        <br/><br/>
        <a href='https://github.com/RamvigneshPasupathy/react-tree' style={{ cursor: 'pointer', color: 'blue' }}>View Code on GitHub</a>
        <hr style={{ width: '60%' }}/>
        <p>Copyright &copy; 2018 Ramvignesh Pasupathy.</p>
      </div>
    );
  }
}

export default App;
