import React, { Component } from "react";

import Router from './Router'
import NavBar from './NavBar'
import Footer from './Footer'

import { fetchRobot } from "../actions/robotsActions";
import {fetchParts} from '../actions/partsAction'
import { connect } from "react-redux";
import '../App.css'


export class App  extends Component {

    componentDidMount(){
        this.props.fetchRobot()
        this.props.fetchParts()
    }

    render(){
        return (
            <div className='app'>
                <NavBar />
                <br/>
                <Router />
                <br/>
                <Footer/>
            </div>
      
        )
    }
}

export default connect(null, { fetchRobot,fetchParts })(App)
