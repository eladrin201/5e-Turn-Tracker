import React from 'react';
import ReactDOM from 'react-dom';
import AddActorForm from './components/AddActorModules.jsx';

class App extends React.Component {
  console.log(this.props.state);
  render() {
    return (
      <div>
        <h2>Hello World</h2>
        <AddActorForm />
      </div>
    );
  }
}

export default App;
