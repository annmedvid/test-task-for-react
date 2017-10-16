import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import routes from './routes';

import './styles/main.scss';

const store = createStore(rootReducer);

ReactDOM.render(
  	<Provider store={store}>
    	<BrowserRouter>
      		{routes}
    	</BrowserRouter>
  	</Provider>,
  	document.querySelector('.app'),
);
