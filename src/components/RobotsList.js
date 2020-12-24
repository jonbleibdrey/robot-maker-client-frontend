import React from 'react'
import {connect} from 'react-redux'
import RobotsContainer from './RobotsContainer'
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'


const RobotsList = ({ robots }) => {
    return (
        <div className='list'>
            <Grid container direction="column"  justify="center" alignItems="center">
                <RobotsContainer />
                    <ul>    
                        {robots.map(robot => 
                            <Card className='partrobotlist'>
                                <li key={robot.id} >
                                    <NavLink to={`/Robots/${robot.id}`} >{robot.name}</NavLink> 
                                </li>
                            </Card>
                         )}
                    </ul> 
            </Grid>
        </div>
    )
}



const mapStateToProps = state => {
    return { robots: state.robots}
}


export default connect(mapStateToProps)(RobotsList);

