import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'

const Part = ({part}) =>{
    if (part) {
        return(
            <div className='singlepart'>
                <Grid container direction="column"  justify="center" alignItems="center">
                    <div className='singletextpart'>
                        <div className='infotext'>
                            <h2 class="fas fa-hands-helping">Part info</h2>
                        </div>
                            <h4> Robot associated: {part.robot.name}</h4>
                            Part name: {part.name} <br/>
                            Damage: {part.damage} <br/>  
                            Ability: {part.ability} <br/>
                            Weight: {part.weight} <br/>
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
       part: state.parts.find(part => part.id.toString() === props.match.params.id)
     }
}
export default connect(mapStateToProps)(Part)