import React, { Component } from 'react'

export class Liker extends Component {
    state = {
        liker:0
    }

    onLike = (e) =>{
        this.setState({
        liker: this.state.liker + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onLike}>like</button>
                <h1>{this.state.liker}</h1>
            </div>
        )
    }
}

export default Liker
