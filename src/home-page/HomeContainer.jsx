import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import injectState from '../utils/decorators/injectState';
import { addProduct } from '../reducers-and-actions/productsActions';
import KeyGenerator from '../utils/keyGenerator';

import HomePage from './HomePage';

const mapStateToProps = (store) => {
	return {
		products: store.products.notesList,
	};
};

@withRouter
@connect(mapStateToProps, { addProduct })
export default class HomeContainer extends Component {
	state = {
		product: {
			name: '',
			colors: new Set(),
		},
		showWarning: false,
	}

	changeName = (e) => {
		const name = e.target.value;
		const { product } = this.state;
		product.name = name;

		this.setState({ product });
		if (name) {
			this.setState({ showWarning: false });
		}
	}

	changeColor = (e) => {
		const color = e.target.name;
		const { product } = this.state;

		if (product.colors.has(color)) {
			product.colors.delete(color);
		} else {
			product.colors.add(color);
		}

		this.setState({ product });
		if (product.colors.size) {
			this.setState({ showWarning: false });
		}
	}

	addProduct = (e) => {
		e.preventDefault();
		const { addProduct, history } = this.props;
		const { name, colors } = this.state.product;
		if (!name || !colors.size) {
			this.setState({ showWarning: true });
			return;
		}
		const product = {
			name,
			colors,
			id: KeyGenerator.getNext(),
		};
		addProduct(product);
		history.push('/products');
	}

	@injectState
	render({ product, showWarning }) {
		return (
			<HomePage
				product={product}
				showWarning={showWarning}
				changeName={this.changeName}
				changeColor={this.changeColor}
				addProduct={this.addProduct} />
		);
	}
}
