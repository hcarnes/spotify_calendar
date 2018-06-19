export default function eventsReducer(state = {
  events: []
}, action) {
  switch (action.type) {
    case "ADD_EVENT":
      return { ...state, events: [...state.events, action.event] }
    // TODO
    default:
      console.debug(action)
      return state;
  }
}