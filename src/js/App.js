import React from 'react';
import ReactDOM from 'react-dom';
import AppForm from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

const render = () => {
  const App = (
    <Provider store={store}>
      <div>
        <h2>Add Actor</h2>
        <AppForm />
      </div>
    </Provider>
  );

  ReactDOM.render(App, document.getElementById('app'));
}

store.subscribe(render);
render();
