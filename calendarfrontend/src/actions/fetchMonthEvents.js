export function fetchMonthEvents(date) {
  return async (dispatch) => {
    dispatch({ type: 'START_ADDING_EVENTS_REQUEST' });

    const eventsResponse = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/events?date=${date.toISOString()}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    const events = await eventsResponse.json();
    dispatch({ type: 'ADD_EVENTS', events });
  };
}