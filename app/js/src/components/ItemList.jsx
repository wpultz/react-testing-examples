import React from 'react';
import { List } from 'immutable';

import Item from './Item';

const ItemList = (props) => {
    const items = props.items.map((item, idx) =>
        <Item
            key={idx}
            idx={idx}
            id={String(item.get('id'))}
            name={item.get('name')}
            removeItem={props.removeItem}
        />
    );
    return (
        <div>
            <div className="item-list">{items}</div>
            <props.AddItemForm />
        </div>
    );
};

ItemList.propTypes = {
    items: React.PropTypes.instanceOf(List),
    removeItem: React.PropTypes.func,
    AddItemForm: React.PropTypes.any
};

export default ItemList;
