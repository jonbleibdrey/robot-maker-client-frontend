import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Liker from './Liker'


const Robot = ({robot}) =>{
    if (robot) {
        return(
            <div className='singlerobot'>
            <Grid container direction="column"  justify="center" alignItems="center">
            <div className='singletextrobot'>
            <div className='infotext'>
                <h2 class="fas fa-robot">Robot info</h2><br/>
                </div> 
                <br/>
                <Liker/>
              Robot name: {robot.name}  <br/>
              Robot function: {robot.function} <br/>
              Robot description: {robot.description}  <br/>
              Robot planet: {robot.planet} <br/>
              <h3> parts associated</h3>
              {robot.parts.map(part => 
              <ol key ={part.id}>
                    Part name: {part.name} <br/>
                    part ability: {part.ability} <br/>
                    part damage: {part.damage} <br/>
                    part weight: {part.weight} <br/>
                
                </ol>
              )}
           </div>

           </Grid>
           </div>
        ) 
    }
    else {
        return <div>
            ...loading
        </div>
    }
}
const mapStateToProps= (state, props) => {
     return{
       robot: state.robots.find(robot => robot.id.toString() === props.match.params.id)
  
     }
}
export default connect(mapStateToProps)(Robot)