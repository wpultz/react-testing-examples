import React from 'react';

class Item extends React.Component {
    static propTypes = {
        idx: React.PropTypes.number,
        id: React.PropTypes.string,
        name: React.PropTypes.string,
        removeItem: React.PropTypes.func
    }

    constructor(props) {
        super(props);
        this.handleRemove = ::this.handleRemove;
    }

    handleRemove() {
        this.props.removeItem(this.props.id);
    }

    render() {
        return (
            <div>
                <div>Id: {this.props.id}</div>
                <div>Name: {this.props.name}</div>
                <button onClick={this.handleRemove}>Remove</button>
            </div>
        );
    }
}

export default Item;
