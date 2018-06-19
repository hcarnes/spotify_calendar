export function fetchMonthEvents(date) {
  return async (dispatch) => {
    dispatch({ type: 'START_ADDING_EVENTS_REQUEST' });

    const eventsResponse = await fetch(`http://localhost:3001/events?date=${date.toISOString()}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    const events = await eventsResponse.json();
    dispatch({ type: 'ADD_EVENTS', events });
  };
}