import React from 'react';
import { Link } from 'react-router-dom';

import InputField from '../components/InputField';

const HomePage = ({ product, showWarning, changeName, changeColor, addProduct }) => {
	let warning = null;
	if (showWarning) {
		warning = (
			<div className="warning">
				Please make sure that all conditions are fulfilled:
				<ul>
					<li>- name field is not empty and contains 4-8 characters (only numbers and letters)</li>
					<li>- you have chosen at least one color</li>
				</ul>
			</div>
		);
	}

	return (
		<div className="home-page">
			<Link to="/products" className="link">
                   go to products
			</Link>
			<div className="home-page_content">
				<h1 className="header">New product</h1>
				<form className="field" onSubmit={addProduct}>
					<label className="name-title" htmlFor="name">product name</label>
					<InputField
						type="text"
						id="name"
						placeholder="Name"
						pattern="[a-zA-Z0-9-]{4,8}"
						title="4-8 characters, but only numbers and letters"
						changeInput={changeName} />
					<fieldset className="colors">
						<legend className="colors-title">product colors</legend>
						<InputField
							type="checkbox"
							name="red"
							id="red"
							value={product.colors.has('red')}
							changeInput={changeColor} />
						<label className="color-title" htmlFor="red">Red</label>
						<InputField
							type="checkbox"
							name="green"
							id="green"
							value={product.colors.has('green')}
							changeInput={changeColor} />
						<label className="color-title" htmlFor="green">Green</label>
						<InputField
							type="checkbox"
							name="blue"
							id="blue"
							value={product.colors.has('blue')}
							changeInput={changeColor} />
						<label className="color-title" htmlFor="blue">Blue</label>
					</fieldset>
					<InputField
						type="submit"
						className="submit"
						value="Save" />
				</form>
				{warning}
			</div>
		</div>
	);
}

export default HomePage;
