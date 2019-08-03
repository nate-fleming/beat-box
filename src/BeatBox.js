import React, { Component } from 'react'
import { withRouter } from "react-router"
import Navbar from './components/nav/Navbar'
import ApplicationViews from './ApplicationViews';

class BeatBox extends Component {
    state = {
        handPosition: 'right'
    }

    changeHandPosition = (side) => {
        this.setState({
            handPosition: side
        })
    }

    render() {
        return (
            <div>
                <Navbar changeHandPosition={this.changeHandPosition} />
                <ApplicationViews handPosition={this.state.handPosition} />
            </div>
        )
    }
}

export default withRouter(BeatBox)
