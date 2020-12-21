import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addRobot} from '../actions/robotsActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

export class RobotsForm extends Component {

    state = {
        name: '',
        function:'',
        description:'',
        planet:''

    }

    handleOnChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.addRobot(this.state)
        this.setState({
            name: '',
            function:'',
            description:'',
            planet:''
        })
    }


    render() {
        return (
            <div className='forms'>
            <form onSubmit={this.handleOnSubmit}>
               <TextField id="standard-basic" label="Name:"  type="text" value={this.state.name} onChange={this.handleOnChange} name='name'/>
               <TextField id="standard-basic" label="Function:" type="text" value={this.state.function} onChange={this.handleOnChange} name='function'/>
               <TextField id="standard-basic" label="Description:" type="text" value={this.state.description} onChange={this.handleOnChange} name='description'/>
               <TextField id="standard-basic" label="Planet:" type="text" value={this.state.planet} onChange={this.handleOnChange} name='planet'/>
                <br/>
                <br/>
               <Button  
                variant="contained" 
                color="white" 
                type="submit" 
                value='Create Robot'>create robot</Button>
           </form>
           </div>
        )
    }
}

export default connect(null, {addRobot})(RobotsForm)
