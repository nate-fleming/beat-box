import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Route, Redirect } from "react-router-dom"
import StrangerBeats from './components/strangerBeats/StrangerBeats'
import './applicationViews.css'

class ApplicationViews extends Component {
    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <StrangerBeats />
                }} />

            </>
        )
    }
}

export default withRouter(ApplicationViews)
