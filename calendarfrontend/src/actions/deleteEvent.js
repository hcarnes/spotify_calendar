export function deleteEvent(eventId) {
  return async (dispatch) => {
    dispatch({ type: 'START_DELETING_EVENT' });

    const eventResponse = await fetch(`http://localhost:3001/events/${eventId}`, {
      headers: {
        'Accept': 'application/json',
      },
      method: "DELETE"
    });
    const event = await eventResponse.json();
    dispatch({ type: 'DELETE_EVENT', event });
  };
}