import React, { Component } from 'react'
import { Container, Grid, Image, GridRow, GridColumn } from 'semantic-ui-react'
import './strangerBeats.css'
import { Howl } from 'howler'
import RHDrumkit from '../Drums/RHDrumkit'
import LHDrumkit from '../Drums/LHDrumkit'
import BoxFills from '../Box&Fills/BoxFills'


export default class StrangerBeats extends Component {

    state = {
        loopIsPlaying: false
    }

    kik = new Howl({
        src: ['https://beat-box-nf.s3.us-east-2.amazonaws.com/Kick.mp3'],
        preload: true,
    })

    snare = new Howl({
        src: ['https://beat-box-nf.s3.us-east-2.amazonaws.com/Snare.mp3'],
        preload: true,
    })

    t1 = new Howl({
        src: ['https://beat-box-nf.s3.us-east-2.amazonaws.com/Tom+1.mp3'],
        preload: true,
    })

    t2 = new Howl({
        src: ['https://beat-box-nf.s3.us-east-2.amazonaws.com/Tom+2.mp3'],
        preload: true,
    })

    loop = new Howl({
        src: ['https://beat-box-nf.s3.us-east-2.amazonaws.com/SB+loop2.mp3'],
        preload: true,
        loop: true
    })

    fill = new Howl({
        src: ['https://beat-box-nf.s3.us-east-2.amazonaws.com/fill2.mp3'],
        preload: true
    })

    fillCollins = new Howl({
        src: ['https://beat-box-nf.s3.us-east-2.amazonaws.com/fill+collins2.mp3'],
        preload: true
    })

    handlePlay = () => {
        this.setState({
            loopIsPlaying: true
        })
        this.loop.play()
    }

    handlePause = () => {
        this.setState({
            loopIsPlaying: false
        })
        this.loop.pause()
    }


    render() {
        return (
            <Container className='stranger-container' >
                <Grid>
                    <GridRow style={{ marginTop: 20 }}>
                        <BoxFills fill={this.fill} fillCollins={this.fillCollins} handlePlay={this.handlePlay} handlePause={this.handlePause} loopIsPlaying={this.state.loopIsPlaying}></BoxFills>
                    </GridRow>
                    <GridRow centered>
                        {
                            this.props.handPosition === 'right' ?
                                <RHDrumkit kick={this.kik} snare={this.snare} tom1={this.t1} tom2={this.t2} orientation={this.props.orientation}>
                                </RHDrumkit>
                                :
                                <LHDrumkit kick={this.kik} snare={this.snare} tom1={this.t1} tom2={this.t2} orientation={this.props.orientation}>
                                </LHDrumkit>
                        }
                    </GridRow>
                </Grid>
            </Container>
        )
    }
}
