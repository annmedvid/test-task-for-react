import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectProps from '../utils/decorators/injectProps';
import { deleteProduct } from '../reducers-and-actions/productsActions';

import ProductsPage from './ProductsPage';

const mapStateToProps = store => ({
    products: store.products.productsList
});

@connect(mapStateToProps, { deleteProduct })
export default class ProductsContainer extends Component {
    static propTypes = {
        products: PropTypes.array.isRequired,
        deleteProduct: PropTypes.func.isRequired,
    }

    deleteProduct = (id) => {
        this.props.deleteProduct(id);
    }

    @injectProps
    render({products, deleteProduct}) {
        return (
            <ProductsPage
                products={products}
                deleteProduct={this.deleteProduct} />
        );
    }
};
