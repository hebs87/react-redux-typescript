import React, {Component} from 'react';
import './App.css';

interface AppProps {
  color?: string;
}

class App extends Component<AppProps> {
  render () {
    return (
      <h1>Hello World</h1>
    );
  }
}

export default App;
