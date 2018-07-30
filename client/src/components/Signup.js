import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signup } from '../actions';
// import * as actions from '../../actions';
import { reduxForm, Field } from 'redux-form';
import { Form, Input } from 'semantic-ui-react';

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps);
  };

  render() {
    // handleSubmit() provided by reduxForm
    const { handleSubmit } = this.props;

    return (
      <div>
        {/* the following is basic/reduxForm vs
          semantic-ui-react combined with redux form */}
        {/* <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Email</label>
            <Field
              name="email"
              type="text"
              component="input"
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
            />
          </fieldset>
          <button>Sign Up</button>
        </form> */}
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Form.Field>
            <label>Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
            {/* <Input name="email" type="text" /> */}
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
            {/* <Input name="password" type="password" /> */}
          </Form.Field>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default compose(
  connect(null, { signup }),
  reduxForm({ form: 'signup' })
)(Signup);

// NOTE: compose allows us to apply multiple HOCs
// to a single component with a cleaner syntax
