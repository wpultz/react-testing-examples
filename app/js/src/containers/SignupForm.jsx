import React from 'react';
import { reduxForm } from 'redux-form';
import cx from 'classnames';

import ErrorMsg from '../components/ErrorMsg';

class SignupForm extends React.Component {
    static propTypes = {
        handleSubmit: React.PropTypes.func,
        submitFailed: React.PropTypes.bool,
        msg: React.PropTypes.string,
        fields: React.PropTypes.object,
        errors: React.PropTypes.object
    }

    constructor(props) {
        super(props);
        this.handleSubmit = ::this.handleSubmit;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(e);
    }

    render() {
        let msg;
        if (this.props.submitFailed && this.props.errors.email) {
            msg = <ErrorMsg msg={this.props.errors.email || 'something failed, try again'} />;
        }
        return (
            <div>
                {msg}
                <form onSubmit={this.handleSubmit}>
                    <input
                        type={'email'}
                        placeholder={'Email'}
                        {...this.props.fields.email}
                        className={cx({ error: this.props.errors.email })}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'signupForm',
    fields: ['email'],
    validate: values => {
        const errs = {};
        if (!values.email) {
            errs.email = 'email is required';
        }
        return errs;
    }
})(SignupForm);
