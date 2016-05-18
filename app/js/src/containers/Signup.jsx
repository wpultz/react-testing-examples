import React from 'react';

import SignupForm from './SignupForm';
import SuccessMsg from '../components/SuccessMsg';

export default class Signup extends React.Component {
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
                this.setState({ signedUp: true });
                res();
            }
        });
    }

    reset() {
        this.setState({ signedUp: false });
    }

    render() {
        let msg;
        if (this.state.signedUp) {
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
