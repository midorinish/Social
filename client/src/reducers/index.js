import { combineReducers } from 'redux';

import ticketsReducer from './tickets'

export default combineReducers({
  tickets: ticketsReducer
});
