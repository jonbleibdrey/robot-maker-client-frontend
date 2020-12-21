import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRobot } from "../actions/robotsActions";
import {fetchParts} from '../actions/partsAction'



export class RobotsContainer extends Component {

  componentDidMount(){
    this.props.fetchRobot()
    this.props.fetchParts()
}

  render() {
    return <div className='partrobotcontainer'>
          <div className='containertext'>
          <h1 className="fas fa-robot" > Robots Container</h1>
          </div>
          </div>;
  }
}

export default connect(null, { fetchRobot,fetchParts })(RobotsContainer);
