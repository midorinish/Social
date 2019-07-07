import { combineReducers } from 'redux';

import ticketsReducer from 'reducers/tickets'

export default combineReducers({
  tickets: ticketsReducer
});
