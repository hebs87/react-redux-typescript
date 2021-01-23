import React, {Component} from 'react';
import './App.css';

interface AppProps {
  color?: string;
}

interface AppState {}

// Function component syntax
// const App = ({color}: AppProps): JSX.Element => {
//   return <div>{color}</div>;
// };

class App extends Component<AppProps, AppState> {
  // Alternative way of defining state - overrides state in Component class and eliminated need for State interface
  // or the constructor
  // state = {
  //   counter: 0,
  // }

  constructor(props: AppProps) {
    super(props);

    this.state = {}
  }
  render () {

    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
