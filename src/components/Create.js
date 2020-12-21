import React from 'react'
import RobotsForm from './RobotsForm'
import PartsForm from './PartsForm'
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'



const link = {
    width: '100px',
    padding: '10px',
    margin: '1 20px 20px 1px',
    boxShadow: '1px 1px 10px rgb(83, 83, 83)',
    background: 'BLACK',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '25px'
  }

const Create = () => {
    return (
        <Grid container direction="column"  justify="center" alignItems="center">
        <div className='createbox'>
            <div className='textbox'>
            <h2 class="far fa-plus-square" >Create Robot</h2>
            <NavLink to="/Robots" exact style={link} className="fas fa-robot">GO BACK TO ROBOTS</NavLink>
            </div>
            <RobotsForm/>
            <br/>
            {/* <h3 className='create'>
            </h3> */}
            <br/>
            <div className='textbox'>
            <h2 class="far fa-plus-square" >Create Part</h2> 
            <NavLink to="/Parts" exact style={link} className="fas fa-wrench">GO BACK TO PARTS</NavLink>
            </div> 
            <PartsForm/>
            <br/>
            <h3>
            </h3>

        </div>
        </Grid>
    )
}

export default Create
