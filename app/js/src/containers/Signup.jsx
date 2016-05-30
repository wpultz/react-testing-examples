import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import { thingSignup, thingSignupReset } from '../actions';

import SignupForm from './SignupForm';
import SuccessMsg from '../components/SuccessMsg';

export class Signup extends React.Component {
    static propTypes = {
        dispatch: React.PropTypes.func,
        things: React.PropTypes.instanceOf(Map)
    }

    constructor(props) {
        super(props);
        this.state = {
            signedUp: false
        };
        this.signMeUp = ::this.signMeUp;
        this.reset = ::this.reset;
    }

    signMeUp({ email }) {
        return new Promise((res, rej) => {
            if (!email) {
                rej({ email: 'email is required' });
            } else {
                this.props.dispatch(thingSignup());
                res();
            }
        });
    }

    reset() {
        this.props.dispatch(thingSignupReset());
    }

    render() {
        let msg;
        if (this.props.things.get('signedUp')) {
            msg = (
                <div>
                    <SuccessMsg msg={'thanks for signing up!'} />
                    <button onClick={this.reset}>Reset</button>
                </div>
            );
        }
        return (
            <div>
                {msg || <SignupForm onSubmit={this.signMeUp} />}
            </div>
        );
    }
}

const selector = state => ({
    things: state.things
});
export default connect(selector)(Signup);
