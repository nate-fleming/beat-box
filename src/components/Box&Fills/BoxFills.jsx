import React, { Component } from 'react'
import { Image, GridColumn, GridRow } from 'semantic-ui-react'
import fill from '../../img/fill.png'
import kit from '../../img/drumkit.png'
import boombox from '../../img/boombox2.png'


export default class BoxFills extends Component {
    render() {
        return (
            <>
                <GridColumn width={8}>
                    <GridRow>
                        <Image src={boombox} style={{ height: 100 }}
                            onClick={(this.props.loopIsPlaying === false) ? this.props.handlePlay : this.props.handlePause} />
                    </GridRow>
                </GridColumn>
                <GridColumn width={4}>
                    <GridRow>
                        <Image className='fill' src={fill} onClick={() => this.props.fill.play()} />
                    </GridRow>
                    <GridRow>
                        <h2 className='fill-text'>1/2 Bar Fill</h2>
                    </GridRow>
                </GridColumn>
                <GridColumn width={4}>
                    <GridRow>
                        <Image className='fill' src={kit} onClick={() => this.props.fillCollins.play()} />
                    </GridRow>
                    <GridRow>
                        <h2 className='fill-text'>Fill Collins</h2>
                    </GridRow>
                </GridColumn>
            </>
        )
    }
}
