import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import routes from './routes';

import './styles/main.scss';

const store = createStore(rootReducer);

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				{routes}
			</BrowserRouter>
		</Provider>
	);
};

export default App;
