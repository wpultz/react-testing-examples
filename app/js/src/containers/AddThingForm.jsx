import React from 'react';
import { connect } from 'react-redux';

import { addThing } from '../actions';

class AddThingForm extends React.Component {
    static propTypes = {
        dispatch: React.PropTypes.func
    }

    constructor(props) {
        super(props);
        this.handleSubmit = ::this.handleSubmit;
    }

    handleSubmit() {
        this.props.dispatch(addThing(this.refs.thingId.value, this.refs.thingName.value));
        this.refs.thingId.value = '';
        this.refs.thingName.value = '';
    }

    render() {
        return (
            <div>
                <label>Id: <input ref={'thingId'} type={'text'} /></label>
                <label>Name: <input ref={'thingName'} type={'text'} /></label>
                <button onClick={this.handleSubmit}>Add Thing</button>
            </div>
        );
    }
}

export default connect()(AddThingForm);
