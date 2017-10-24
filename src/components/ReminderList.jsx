import React, {Component} from 'react';
import moment from 'moment';


export default class ReminderList extends Component {

    deleteReminderById(id) {
        this.props.deleteReminder(id);
    }

    render() {
        return (
            <div className="reminder-list">
                <ul className="list-group">
                    {this.props.reminders.map(elem => {
                        return (
                            <li key={elem.id} className="list-group-item" >
                                <div className="list-item">
                                  <div>{elem.text}</div>
                                  <div><em>{moment(new Date(elem.dueDate)).fromNow()}</em></div>
                                </div>
                                <div className="list-item delete-button" onClick={() => this.deleteReminderById(elem.id)}>
                                  &#x2715;
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
