import setHours from 'date-fns/set_hours'
import setMinutes from 'date-fns/set_minutes'

export function addEvent(eventToAdd) {
  const convertHourMinutePairToDate = (date, pair) => {
    const [hours, minutes] = pair.split(":");
    const dateWithHours = setHours(date, hours);
    return setMinutes(dateWithHours, minutes);
  };
  return async (dispatch) => {
    dispatch({ type: 'START_ADDING_EVENT' });
    const eventJSON = JSON.stringify({
      event: {
        description: eventToAdd.description,
        start: convertHourMinutePairToDate(eventToAdd.date, eventToAdd.startTime),
        end: convertHourMinutePairToDate(eventToAdd.date, eventToAdd.endTime),
      }
    });
    const eventResponse = await fetch('http://localhost:3001/events', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: eventJSON,
      method: "post"
    });
    const event = await eventResponse.json();
    dispatch({ type: 'ADD_EVENT', event });
  };
}