import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    squad: [
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ]
  }

  render() {
    return (
      <div className='App'>
        {this.state.squad.map(squad => {
          return <h1>
            {squad}
          </h1>
        })}
      </div>
    );
  }
}

export default App;
