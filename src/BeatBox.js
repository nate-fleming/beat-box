import React, { Component } from 'react'
import { withRouter } from "react-router"
import Navbar from './components/nav/Navbar'
import ApplicationViews from './ApplicationViews';

class BeatBox extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ApplicationViews />
            </div>
        )
    }
}

export default withRouter(BeatBox)
