import React, { Component } from 'react'
import { Image, GridColumn } from 'semantic-ui-react'
import kick from '../../img/kick.png'
import snare from '../../img/snare.png'
import tom from '../../img/tom.png'
import './drumkit.css'

export default class LHDrumkit extends Component {
    render() {
        return (
            <>
                <GridColumn width={4}>
                    <Image className='drum' src={tom} onClick={() => this.props.tom2.play()} style={{ border: 'none', paddingTop: 40 }}></Image>
                </GridColumn>
                <GridColumn width={4}>
                    <Image className='drum' src={tom} onClick={() => this.props.tom1.play()} style={{ border: 'none', backgroundColor: ' ' }}></Image>
                </GridColumn>
                <GridColumn width={4}>
                    <Image className='drum' src={snare} onClick={() => this.props.snare.play()} style={{ border: 'none', backgroundColor: ' ' }}></Image>
                </GridColumn>
                <GridColumn width={4}>
                    <Image className='drum' src={kick} onClick={() => this.props.kick.play()} style={{ border: 'none', paddingTop: 40 }}></Image>
                </GridColumn>
            </>
        )
    }
}