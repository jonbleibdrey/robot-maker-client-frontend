export const fetchRobot = () => {
    return(dispatch) => {
        fetch('https://robot-maker-api.herokuapp.com/robots')
        .then(resp => resp.json())
        .then(robots => dispatch({type: 'FETCH_ROBOTS', payload: robots}))
    }

}

export const addRobot = robot => {
    return dispatch => {
          fetch('https://robot-maker-api.herokuapp.com/robots', {
        method: 'POST',
        body:JSON.stringify(robot),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(robot => dispatch({type: 'ADD_ROBOT', payload: robot}))
        
    }
  
}


