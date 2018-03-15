import React from 'react';

class Form extends React.Component {
    render() {
        console.log('Form', this.props);
        return (
            <p>Your {this.props.evaluationType} form will be here</p>
        )
    }
}

export default Form;