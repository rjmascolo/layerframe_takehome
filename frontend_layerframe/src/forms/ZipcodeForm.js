import React from 'react'
import {Button, Form} from 'semantic-ui-react'

class ZipcodeForm extends React.Component {
  state = {
      zipcode: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.enterZipcode(this.state.zipcode)
    this.setState({zipcode: ""} )
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <div className="flex">
          <Form.Field>
            <input
              id="form-field"
              placeholder="Enter Zipcode"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
          </div>
        </Form>
    )
  }
}

export default ZipcodeForm
