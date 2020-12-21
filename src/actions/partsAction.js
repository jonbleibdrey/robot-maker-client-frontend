export const fetchParts = () => {
    return(dispatch) => {
        fetch('http://localhost:3001/parts')
        .then(resp => resp.json())
        .then(parts => dispatch({ type: 'FETCH_PARTS', payload: parts}))
    }

}

export const addPart = part => {
    return dispatch => {
          fetch('http://localhost:3001/parts', {
        method: 'POST',
        body:JSON.stringify(part),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(part => dispatch({type: 'ADD_PART', payload: part}))
        
    }
  
}