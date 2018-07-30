import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signin } from '../actions';
// import * as actions from '../../actions';
import { reduxForm, Field } from 'redux-form';
import { Form, Input } from 'semantic-ui-react';

class Signin extends Component {
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    // handleSubmit() provided by reduxForm
    const { handleSubmit } = this.props;

    return (
      <div>
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
          <div>
            {this.props.errorMessage}
          </div>
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage }
};

export default compose(
  connect(mapStateToProps, { signin }),
  reduxForm({ form: 'signin' })
)(Signin);

// NOTE: compose allows us to apply multiple HOCs
// to a single component with a cleaner syntax
