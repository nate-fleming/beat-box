import React, { Component } from 'react'
import { Container, Grid, Image, GridRow, GridColumn } from 'semantic-ui-react'
import kick from '../../img/kick.png'
import snare from '../../img/snare.png'
import tom from '../../img/tom.png'
import fill from '../../img/fill.png'
import kit from '../../img/drumkit.png'
import boombox from '../../img/boombox2.png'
import './strangerBeats.css'
import { Howl, Howler } from 'howler'
import kik from '../../img/Kick.mp3'
import RHDrumkit from '../Drums/RHDrumkit'
import LHDrumkit from '../Drums/LHDrumkit'


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

    handlePlay() {
        this.setState({
            loopIsPlaying: true
        })
        this.loop.play()
    }

    handlePause() {
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
                        <GridColumn width={8}>
                            <GridRow>
                                <Image src={boombox} style={{ height: 100 }}
                                    onClick={() => (this.state.loopIsPlaying === false) ? this.handlePlay() : this.handlePause()} />
                            </GridRow>
                        </GridColumn>
                        <GridColumn width={4}>
                            <GridRow>
                                <Image className='fill' src={fill} onClick={() => this.fill.play()} />
                            </GridRow>
                            <GridRow>
                                <h2 className='fill-text'>1/2 Bar Fill</h2>
                            </GridRow>
                        </GridColumn>
                        <GridColumn width={4}>
                            <GridRow>
                                <Image className='fill' src={kit} onClick={() => this.fillCollins.play()} />
                            </GridRow>
                            <GridRow>
                                <h2 className='fill-text'>Fill Collins</h2>
                            </GridRow>
                        </GridColumn>
                    </GridRow>
                    <GridRow centered>
                        <RHDrumkit kick={this.kik} snare={this.snare} tom1={this.t1} tom2={this.t2}>
                        </RHDrumkit>
                    </GridRow>
                </Grid>
            </Container>
        )
    }
}
