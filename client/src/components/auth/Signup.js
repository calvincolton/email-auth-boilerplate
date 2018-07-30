import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, Input } from 'semantic-ui-react';

class Signup extends Component {
  render() {
    return (
      <div>
        {/* <form>
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
        </form> */}
        <form>
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
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'signup' })(Signup);
