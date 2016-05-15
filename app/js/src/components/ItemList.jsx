import React from 'react';
import { List } from 'immutable';

import Item from './Item';

const ItemList = (props) => {
    const items = props.items.map((item, idx) =>
        <Item
            key={idx}
            idx={idx}
            id={item.get('id')}
            name={item.get('name')}
            removeItem={props.removeItem}
        />
    );
    return (
        <div>
            {items}
        </div>
    );
};

ItemList.propTypes = {
    items: React.PropTypes.instanceOf(List),
    removeItem: React.PropTypes.func
};

export default ItemList;
