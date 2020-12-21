import React, { Component } from "react";
import { connect } from "react-redux";
import { addPart } from "../actions/partsAction";
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import '../App.css'


export class PartsForm extends Component {
  state = {
    name: "",
    damage: "",
    ability: "",
    weight: "",
    robot_id: "",
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addPart(this.state);
    this.setState({
      name: "",
      damage: "",
      ability: "",
      weight: "",
    });
  };

  render() {
    return (
      <div className='forms'>
      <form noValidate autoComplete="off" onSubmit={this.handleOnSubmit}>
        <label className='choose'>Choose Robot:</label>
        
        <Select
          onChange={this.handleOnChange}
          value={this.state.robot_id}
          name="robot_id">

          {this.props.robots.map((robot) => (
            <option key={robot.id} value={robot.id}>
              {" "}
              {robot.name}
            </option>
          ))}
        </Select>
        <br/>
        <TextField id="standard-basic" label="Name of part:" 
          type="text"
          value={this.state.name}
          onChange={this.handleOnChange}
          name="name"
        />
        
        <TextField id="standard-basic" label="Damage:" 
          type="text"
          value={this.state.damage}
          onChange={this.handleOnChange}
          name="damage"
        />
      
        <TextField id="standard-basic" label="Ability:" 
          type="text"
          value={this.state.ability}
          onChange={this.handleOnChange}
          name="ability"
        />
        
        <TextField id="standard-basic" label="Weight:" 
          type="text"
          value={this.state.weight}
          onChange={this.handleOnChange}
          name="weight"
        />
        
      <br/>
      <br/>
        <Button  
        variant="contained" 
        color="white"
        type="submit"
         value="Create Part"> create part </Button>
      </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { robots: state.robots };
};

export default connect(mapStateToProps, { addPart })(PartsForm);
