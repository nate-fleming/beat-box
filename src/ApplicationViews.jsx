import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Route, Redirect } from "react-router-dom"
import StrangerBeats from './components/strangerBeats/StrangerBeats'
import './applicationViews.css'

class ApplicationViews extends Component {

    state = {
        orientation: ''
    }

    getOrientation = () => {
        if (window.innerWidth < window.innerHeight) {
            this.setState({
                orientation: 'portrait'
            })
        } else {
            this.setState({
                orientation: 'landscape'
            })
        }
    }

    isPortrait = () => {
        return window.innerWidth > window.innerHeight
    }

    componentDidMount() {
        window.addEventListener('orientationchange', () => this.setState({
            orientation: this.isPortrait() ? 'portrait' : 'landscape'
        }))

        this.getOrientation()
    }
    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <StrangerBeats handPosition={this.props.handPosition} orientation={this.state.orientation} />
                }} />

            </>
        )
    }
}

export default withRouter(ApplicationViews)
