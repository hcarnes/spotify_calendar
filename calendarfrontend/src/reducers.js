export default function eventsReducer(state = {
  events: []
}, action) {
  switch (action.type) {
    case "ADD_EVENT":
      return { ...state, events: [...state.events, action.event] };
    case "ADD_EVENTS":
      return { ...state, events: action.events };
    default:
      console.debug(action);
      return state;
  }
}