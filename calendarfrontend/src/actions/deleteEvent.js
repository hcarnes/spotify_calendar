export function deleteEvent(eventId) {
  return async (dispatch) => {
    dispatch({ type: 'START_DELETING_EVENT' });

    const eventResponse = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/events/${eventId}`, {
      headers: {
        'Accept': 'application/json',
      },
      method: "DELETE"
    });
    const event = await eventResponse.json();
    dispatch({ type: 'DELETE_EVENT', event });
  };
}