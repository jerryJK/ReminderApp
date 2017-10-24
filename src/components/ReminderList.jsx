import React, {Component} from 'react';

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
                            <li key={elem.id} className="list-group-item" onClick={() => this.deleteReminderById(elem.id)}>
                                <div>{elem.text}</div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }

}
