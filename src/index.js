import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import configureStore from './Redux/store';
import AppRouter from './AppRouter';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
