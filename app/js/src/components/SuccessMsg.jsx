import React from 'react';

const SuccessMsg = props => <div className={'success'}>{props.msg}</div>;
SuccessMsg.propTypes = {
    msg: React.PropTypes.string
};
export default SuccessMsg;
