export default function eventsReducer(state = {
  events: []
}, action) {
  switch (action.type) {
    // TODO
    default:
      console.debug(action)
      return state;
  }
}