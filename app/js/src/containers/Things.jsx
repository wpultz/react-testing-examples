import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import ItemList from '../components/ItemList';
import AddThingForm from './AddThingForm';

class Things extends React.Component {
    static propTypes = {
        dispatch: React.PropTypes.func,
        things: React.PropTypes.instanceOf(List)
    }

    constructor(props) {
        super(props);
        this.removeThing = ::this.removeThing;
    }

    removeThing(id) {
        this.props.dispatch({
            type: 'REMOVE_THING',
            id
        });
    }

    render() {
        return (
            <ItemList
                items={this.props.things}
                removeItem={this.removeThing}
                AddItemForm={AddThingForm}
            />
        );
    }
}

export default connect(state => ({ things: state.things }))(Things);
