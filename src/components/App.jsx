import React, {Component} from 'react';
import ReminderForm from './ReminderForm.jsx';
import ReminderList from './ReminderList.jsx';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { addReminder, deleteReminder } from '../actions';



class App extends Component {

    render() {
      const {addReminder, deleteReminder, reminders} = this.props;

        return (
            <div className="app">
              <div className="title">
                  ReminderApp
              </div>
              <ReminderForm addReminder={addReminder}/>
              <ReminderList reminders={reminders} deleteReminder={deleteReminder}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReminder, deleteReminder} ,dispatch)
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
