import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, CHECK_DONE} from "../constants";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const reminder = action => {
    return {
        text: action.text,
        dueDate: action.dueDate,
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

const checkDone = (state, id) => {
    let newState =  state.map(elem => {
          if(elem.id === id){
            elem.checkDone = !elem.checkDone;
          }
          return elem;
    });
    return newState;
};

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders',reminders);
            console.log('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = deleteReminder(state,action.id);
            bake_cookie('reminders',reminders);
            console.log(reminders);
            return reminders;
        case CHECK_DONE:
            reminders = checkDone(state,action.id);
            console.log(reminders);
            bake_cookie('reminders',reminders);
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            bake_cookie('reminders',reminders);
            console.log(reminders);
            return reminders;
        default:
            return state;
    }
};

export default reminders;
