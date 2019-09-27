import React from 'react';
import { hot } from 'react-hot-loader';
class App extend React.Component {
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default hot(module)(App);
