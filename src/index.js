import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import App from './components/App.jsx';
import styles from './index.scss';

const store = createStore(reducer);


document.addEventListener('DOMContentLoaded', function(e) {
    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.getElementById('root')
      )
});
