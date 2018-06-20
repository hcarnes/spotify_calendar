import setHours from 'date-fns/set_hours'
import setMinutes from 'date-fns/set_minutes'

export function updateEvent(eventToUpdate) {
  const convertHourMinutePairToDate = (date, pair) => {
    const [hours, minutes] = pair.split(":");
    const dateWithHours = setHours(date, hours);
    return setMinutes(dateWithHours, minutes);
  };
  return async (dispatch) => {
    dispatch({ type: 'START_UPDATING_EVENT' });
    const eventJSON = JSON.stringify({
      event: {
        description: eventToUpdate.description,
        start: convertHourMinutePairToDate(eventToUpdate.date, eventToUpdate.startTime),
        end: convertHourMinutePairToDate(eventToUpdate.date, eventToUpdate.endTime),
      }
    });
    const eventResponse = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/events/${eventToUpdate.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: eventJSON,
      method: "PUT"
    });
    const event = await eventResponse.json();
    dispatch({ type: 'UPDATE_EVENT', event });
  };
}