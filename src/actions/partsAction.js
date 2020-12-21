export const fetchParts = () => {
    return(dispatch) => {
        fetch('https://robot-maker-api.herokuapp.com/parts')
        .then(resp => resp.json())
        .then(parts => dispatch({ type: 'FETCH_PARTS', payload: parts}))
    }

}

export const addPart = part => {
    return dispatch => {
          fetch('https://robot-maker-api.herokuapp.com/parts', {
        method: 'POST',
        body:JSON.stringify(part),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(part => dispatch({type: 'ADD_PART', payload: part}))
        
    }
  
}