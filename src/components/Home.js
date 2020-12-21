import React from 'react'
import Grid from '@material-ui/core/Grid'


const Home = () => {
    return (
        <Grid container direction="column"  justify="center" alignItems="center">
        <div className="home">
        <div className="hometext">
            <h1>Welcome to BuildARobot.com</h1>
            
            <h2>A place to build a simple robot and add parts!</h2>
        <div className='robot1'>
        <img src="/images/robot2.PNG" alt="that guy"/>
        </div >
     
        
        </div>
        </div>
        </Grid>
       
    )
}

export default Home
