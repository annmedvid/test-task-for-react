import React from 'react';
import injectProps from '../utils/decorators/injectProps';

export default class ProductItem extends React.PureComponent {
	@injectProps
	render({ product, deleteProduct }) {
		return (
			<div className="product">
				<h2 className="name">{product.name}</h2>
				<p className="colors">{[...product.colors].map((color) => { return <span>{color}</span>; })}</p>
				<button
					type="button"
					value="delete"
					className="submit"
					onClick={() => { return deleteProduct(product.id); }}>
                    Delete
				</button>
			</div>
		);
	}
}
