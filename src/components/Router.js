import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import RobotsList from '../components/RobotsList'
import PartsList from '../components/PartsList'
import Create from '../components/Create'
import Part from '../components/Part'
import Robot from '../components/Robot'



const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/create' component={Create} />
                <Route exact path='/Robots' component={RobotsList} />
                <Route exact path='/Robots/:id' component={Robot} />
                <Route exact path='/parts' component={PartsList} />
                <Route exact path='/parts/:id' component={Part} />
            </Switch>
        </div>
    )
}

export default Router
