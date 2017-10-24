import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from "../constants";


export const addReminder = (text,dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    };
    console.log('add action', action);
    return action;
};


export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id,
    };
    console.log('delete action', action);
    return action;

};

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS
    };
    console.log('clear action', action);
    return action;

};
