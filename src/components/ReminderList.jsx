import React, {Component} from 'react';
import moment from 'moment';


export default class ReminderList extends Component {

    deleteReminderById(e,id) {
        e.stopPropagation();
        this.props.deleteReminder(id);
    }

    checkDone(id) {
        this.props.checkDone(id);
    }

    render() {
        return (
          <div className="reminder-list">
              <ul className="list-group col-sm-5">
                  {this.props.reminders.map(elem => {
                      return (
                          <li className="list-group-item" style={{'backgroundColor': elem.checkDone?"lightgreen":"white" }} key={elem.id} onClick={() => this.checkDone(elem.id)} >
                              <div className="list-item">
                                <div>{elem.text}</div>
                                <div><em>{moment(new Date(elem.dueDate)).fromNow()}</em></div>
                              </div>
                              <div className="list-item delete-button" onClick={(e) => this.deleteReminderById(e,elem.id)}>
                                &#x2715;
                              </div>
                              <div className="list-item check">
                                {elem.checkDone?"done":"undone"}
                              </div>

                          </li>
                      )
                  })
                  }
              </ul>
          </div>
        )
    }

}
