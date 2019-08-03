import React, { Component } from 'react'
import { Image, GridColumn, GridRow } from 'semantic-ui-react'
import kick from '../../img/kick.png'
import snare from '../../img/snare.png'
import tom from '../../img/tom.png'
import './drumkit.css'

export default class RHDrumkit extends Component {

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
        console.log('state', this.state.orientation)
        return (
            this.state.orientation === 'landscape' ?
                <>
                    <GridColumn width={4}>
                        <Image className='drum' src={kick} onClick={() => this.props.kick.play()} style={{ border: 'none', marginTop: 40 }} ></Image>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Image className='drum' src={snare} onClick={() => this.props.snare.play()} style={{ border: 'none', backgroundColor: ' ' }}></Image>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Image className='drum' src={tom} onClick={() => this.props.tom1.play()} style={{ border: 'none', backgroundColor: ' ' }}></Image>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Image className='drum' src={tom} onClick={() => this.props.tom2.play()} style={{ border: 'none', marginTop: 40 }}></Image>
                    </GridColumn>
                </>
                :
                <>
                    <GridRow centered>
                        <GridColumn width={4}>
                            <Image className='drum' src={kick} onClick={() => this.props.kick.play()} style={{ border: 'none' }} ></Image>
                        </GridColumn>
                        <GridColumn width={4}>
                            <Image className='drum' src={tom} onClick={() => this.props.tom1.play()} style={{ border: 'none', backgroundColor: ' ' }}></Image>
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn width={4}>
                            <Image className='drum' src={snare} onClick={() => this.props.snare.play()} style={{ border: 'none', backgroundColor: ' ' }}></Image>
                        </GridColumn>
                        <GridColumn width={4}>
                            <Image className='drum' src={tom} onClick={() => this.props.tom2.play()} style={{ border: 'none' }}></Image>
                        </GridColumn>
                    </GridRow>
                </>
        )
    }
}
