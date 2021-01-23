import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {Todo, StoreState} from "./redux/interfaces/todos";
import {fetchTodos, deleteTodo} from "./redux/actions";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  loading: boolean;
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
      loading: false,
    };
  }

  componentDidUpdate(prevProps: AppProps, prevState: AppState) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({loading: false});
    }
  };

  onFetchClick = (): void => {
    this.setState({loading: true});
    this.props.fetchTodos();
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map(({id, title}: Todo): JSX.Element => {
      return <p onClick={() => this.onTodoClick(id)} key={id}>{title}</p>
    });
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  render () {
    const {todos} = this.props;
    const {loading} = this.state;

    return (
      <div>
        <button onClick={this.onFetchClick}>Fetch</button>
        {
          loading &&
          <p>LOADING...</p>
        }
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
  {fetchTodos, deleteTodo}
)(App);
