import { UPDATE_TICKET } from 'actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case UPDATE_TICKET:
      return [...state, action.payload];
    default:
      return state;
  }
}
