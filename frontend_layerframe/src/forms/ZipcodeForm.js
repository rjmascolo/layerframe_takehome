import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import {NYCzipcodes} from '../data'

class ZipcodeForm extends React.Component {
  state = {
      zipcode: "",
      error: false
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let {zipcode} = this.state
    if(NYCzipcodes.includes(parseInt(zipcode))) {
      this.props.enterZipcode(this.state.zipcode)
      this.setState({zipcode: "", error: false} )

    } else {
      this.setState({error: true})
    }
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
            {this.state.error ? <p>That is not a NYC Zipcode</p>:null}
          </Form.Field>
          <Button type="submit">Submit</Button>
          </div>
        </Form>
    )
  }
}

export default ZipcodeForm
