import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {Todo, StoreState} from "./redux/interfaces/todos";
import {fetchTodos} from "./redux/actions";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
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

const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
  return {todos};
};

export default connect(
  mapStateToProps,
  {fetchTodos}
)(App);
