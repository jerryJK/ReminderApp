import {ADD_REMINDER, DELETE_REMINDER} from "../constants";

const reminder = action => {
    return {
        text: action.text,
        id: Math.random()
    }
};

const deleteReminder = (state, id) => {
    let newState =  state.filter(elem => {
        return (
            elem.id !== id
        )
    });
    return newState;
};

const reminders = (state = [], action) => {
    let reminders = null;

    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = deleteReminder(state,action.id);
            console.log(reminders);
            return reminders;
        default:
            return state;
    }
};

export default reminders;
