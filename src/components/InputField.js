import React from 'react';
import injectProps from '../utils/decorators/injectProps';

export default class InputField extends React.PureComponent {
    @injectProps
    render({ changeInput, ...restProps }) {
        return <input
            onChange={e => changeInput(e)}
            {...restProps} />
    }
};
