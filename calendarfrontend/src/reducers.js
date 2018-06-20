import parse from 'date-fns/parse'
export default function eventsReducer(state = {
  events: []
}, action) {
  const convertDates = (events) => {
    return events.map(event => {
      return {
        ...event,
        start: parse(event.start),
        end: parse(event.end),
        created_at: parse(event.created_at),
        updated_at: parse(event.updated_at),
      }
    });
  };
  switch (action.type) {
    case "ADD_EVENT":
      return { ...state, events: [...state.events, ...convertDates([action.event])] };
    case "UPDATE_EVENT":
      const eventsWithoutUpdated = state.events.filter(e => e.id !== action.event.id)
      return { ...state, events: [...eventsWithoutUpdated, ...convertDates([action.event])] }
    case "ADD_EVENTS":
      return { ...state, events: convertDates(action.events) };
    default:
      console.debug(action);
      return state;
  }
}