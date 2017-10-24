import React, {Component} from 'react';


export default class ReminderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  adddReminder() {
      this.props.addReminder(this.state.text);
  }

  render() {
    return (
    <div className="form-inline reminder-form">
      <div className="form-group">
        <input
          className="form-control"
          placeholder="I have to..."
          value={this.state.text}
          onChange={event => this.setState({text: event.target.value})}
        />
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => this.adddReminder()}
        >
        Add reminder
      </button>
    </div>
   )
  }

}
