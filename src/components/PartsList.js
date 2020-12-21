import React from 'react'
import {connect} from 'react-redux'
import PartsContainer from './PartsContainer'
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'


const PartsList = ({parts}) => {
    return (
        <div className='list'>
            <Grid container direction="column"  justify="center" alignItems="center">
             <PartsContainer />
            <ul>
            
        {parts.map(part => 
                        <Card className='partrobotlist'>
        <li key={part.id}>
            <NavLink to={`/parts/${part.id}`}>{part.name}</NavLink> 
            </li>
                    </Card>
       
       )}
            </ul>
            </Grid>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        parts: state.parts,
        
    }
}


export default connect(mapStateToProps)(PartsList)



// <li key={part.id}>
// Name of part:{part.name}
// <br/>
// Robot:{part.robot_id}
// <br/>
// Damage:{part.damage}
// <br/>
// Ability:{part.ability}
// <br/>
// Weight:{part.weight}
// <br/>

// </li>
