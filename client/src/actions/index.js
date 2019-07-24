import { UPDATE_TICKET } from 'actions/types';

export function updateTicket(ticket) {
  return (
    {
      type: UPDATE_TICKET,
      payload: ticket
    }
  );
}
