import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import { removeThing } from '../actions';
import ItemList from '../components/ItemList';
import AddThingForm from './AddThingForm';

class Things extends React.Component {
    static propTypes = {
        dispatch: React.PropTypes.func,
        things: React.PropTypes.instanceOf(Map)
    }

    constructor(props) {
        super(props);
        this.removeThing = ::this.removeThing;
    }

    removeThing(id) {
        this.props.dispatch(removeThing(id));
    }

    render() {
        const thingOptions = this.props.things.get('options');
        return (
            <ItemList
                items={thingOptions}
                removeItem={this.removeThing}
                AddItemForm={AddThingForm}
            />
        );
    }
}

export default connect(state => ({ things: state.things }))(Things);
