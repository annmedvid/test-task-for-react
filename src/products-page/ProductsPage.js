import React from 'react';
import { Link } from 'react-router-dom';
import injectProps from '../utils/decorators/injectProps';
import KeyGenerator from '../utils/keyGenerator';

import ProductItem from './ProductItem';

export default class ProductsPage extends React.PureComponent {
    @injectProps
    render({ products, deleteProduct }) {
    	let productsList = products.map(product => <ProductItem
    		key={KeyGenerator.getNext()}
    		product={product}
    		deleteProduct={deleteProduct} />
    	);

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
    }
};
