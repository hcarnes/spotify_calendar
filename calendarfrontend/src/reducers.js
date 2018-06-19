import parse from 'date-fns/parse'
export default function eventsReducer(state = {
  events: []
}, action) {
  const convertDates = (events) => {
    return events.map(event => {
      return {
        ...event,
        start: parse(event.start),
        end: parse(event.start),
        created_at: parse(event.start),
        updated_at: parse(event.start),
      }
    });
  };
  switch (action.type) {
    case "ADD_EVENT":
      return { ...state, events: [...state.events, ...convertDates([action.event])] };
    case "ADD_EVENTS":
      return { ...state, events: convertDates(action.events) };
    default:
      console.debug(action);
      return state;
  }
}