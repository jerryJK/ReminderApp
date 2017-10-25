import React, {Component} from 'react';
import ReminderForm from './ReminderForm.jsx';
import ReminderList from './ReminderList.jsx';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { addReminder, deleteReminder, clearReminders, checkDone} from '../actions';



class App extends Component {

    render() {
      const {addReminder, deleteReminder, clearReminders, checkDone, reminders} = this.props;

        return (
            <div className="app">
              <div className="title">
                  ReminderApp
              </div>
              <ReminderForm addReminder={addReminder}/>
              <ReminderList reminders={reminders} deleteReminder={deleteReminder} checkDone={checkDone}/>
              <button className="btn btn-danger" onClick={clearReminders}>
                Clear reminders
              </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReminder, deleteReminder,checkDone, clearReminders} ,dispatch)
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
