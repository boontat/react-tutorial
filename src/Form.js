import React, { Component } from 'react';
import _ from 'lodash';
import $ from 'jquery';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;

        if (!_.isEmpty(name) && !_.isEmpty(value)) {
            this.setState({
                [name] : value
            });
            $('#error').hide();
        } else {
            $('#error').show();
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        if (!_.isEmpty(this.state.name) && !_.isEmpty(this.state.job)) {
            this.props.handleSubmit(this.state);
            this.setState(this.initialState);
        } else {
            // flash error message here
            alert('just wanted to annoy you');
            $('#error').show();
        }
    }

    render() {
        const { name, job } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input
                    id="job"
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange}/>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
                <span id="error">Form is emtpy</span>
            </form>
        );
    }
}

export default Form;