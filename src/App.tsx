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

    this.state = {};
  }

  onFetchClick = (): void => {
    this.props.fetchTodos();
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map(({id, title, completed}: Todo): JSX.Element => {
      return <div key={id}>{title}</div>
    });
  }

  render () {
    const {todos} = this.props;
    console.log(todos);
    return (
      <div>
        <button onClick={this.onFetchClick}>Fetch</button>
        {
          todos &&
          this.renderList()
        }
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
