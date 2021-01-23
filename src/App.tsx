import React, {Component} from 'react';
import './App.css';

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

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

    this.state = {
      counter: 0,
    }
  }

  onIncrementClick = (): void=> {
    let counter = this.state.counter;
    counter++;
    this.setState({counter})
  }

  onDecrementClick = (): void => {
    let counter = this.state.counter;
    if (counter > 0) {
      counter--;
      this.setState({counter})
    }
    return;
  }

  render () {
    const {counter} = this.state;

    return (
      <div>
        <button onClick={this.onIncrementClick}>Increment</button>
        <button onClick={this.onDecrementClick}>Decrement</button>
        <h2>{counter}</h2>
      </div>
    );
  }
}

export default App;
