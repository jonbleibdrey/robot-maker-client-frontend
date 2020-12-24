import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'



const link = {
  width: '15px',
  padding: '20px',
  margin: '0 20px 25px',
  background: 'white',
  boxShadow: '1px 1px 5px rgb(83, 83, 83)',
  textDecoration: 'none',
  color: 'black',
  borderRadius: '25px'
  
}



const NavBar = () => {
  return (
    <Grid container direction="column"  justify="center" alignItems="center">
      <div className="navbar" >
        <NavLink to='/'exact style={link} > BuildARobot.com</NavLink>
        <NavLink to="/"exact style={link}  className="fas fa-home"></NavLink>
        <NavLink to="/create" exact style={link} className="fas fa-plus"></NavLink>
        <NavLink to="/Robots" exact style={link} className="fas fa-robot"></NavLink>
        <NavLink to="/Parts" exact style={link}  className="fas fa-wrench"></NavLink>
      </div>
    </Grid>
  );
};

export default NavBar;