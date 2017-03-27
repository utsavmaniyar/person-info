import { combineReducers } from 'redux';
import ActivePeople from './active-people_reducer';

const rootReducer = combineReducers({
  activePeople : ActivePeople
});

export default rootReducer;
