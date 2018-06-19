export function addEvent(eventToAdd) {
  return async (dispatch) => {
    // dispatch({ type: 'START_ADDING_PLANT' });
    // const plantJSON = JSON.stringify({ plant: plantToAdd })
    // const plantResponse = await fetch('http://localhost:3001/plants', {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: plantJSON,
    //   method: "post"
    // })
    // const plant = await plantResponse.json()
    dispatch({ type: 'ADD_EVENT', event: eventToAdd })
  };
}