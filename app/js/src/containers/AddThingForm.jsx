import React from 'react';
import { connect } from 'react-redux';

class AddThingForm extends React.Component {
    static propTypes = {
        dispatch: React.PropTypes.func
    }

    constructor(props) {
        super(props);
        this.addThing = ::this.addThing;
    }

    addThing() {
        this.props.dispatch({
            type: 'ADD_THING',
            id: this.refs.thingId.value,
            name: this.refs.thingName.value
        });
    }

    render() {
        return (
            <div>
                <label>Id: <input ref={'thingId'} type={'text'} /></label>
                <label>Name: <input ref={'thingName'} type={'text'} /></label>
                <button onClick={this.addThing}>Add Thing</button>
            </div>
        );
    }
}

export default connect()(AddThingForm);
