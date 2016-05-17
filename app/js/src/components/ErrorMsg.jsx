import React from 'react';

const SuccessMsg = props => <div className={'error'}>{props.msg}</div>;
SuccessMsg.propTypes = {
    msg: React.PropTypes.string
};
export default SuccessMsg;
