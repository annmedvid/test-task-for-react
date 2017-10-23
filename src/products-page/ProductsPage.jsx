import React from 'react';
import { Link } from 'react-router-dom';
import KeyGenerator from '../utils/keyGenerator';

import ProductItem from './ProductItem';

const ProductsPage = ({ products, deleteProduct }) => {
	const productsList = products.map((product) => {
		return (
			<ProductItem
				key={KeyGenerator.getNext()}
				product={product}
				deleteProduct={deleteProduct} />
		);
	});

	return (
		<div className="products-page">
			<Link to="/home" className="link">
				add new product
			</Link>
			<div className="products-page_content">
				<h1 className="header">Products</h1>
				{productsList}
			</div>
		</div>
	);
};

export default ProductsPage;
