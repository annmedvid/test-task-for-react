import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeContainer from './home-page/HomeContainer';
import ProductsContainer from './products-page/ProductsContainer';

export default (
	<Switch>
		<Route path="/home" component={HomeContainer} />
		<Route path="/products" component={ProductsContainer} />
		<Redirect from="*" to="home" />
	</Switch>
);
