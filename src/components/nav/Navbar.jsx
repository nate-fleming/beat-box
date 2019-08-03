import React, { Component } from 'react'
import { Menu, Dropdown, Container, Button, Icon } from 'semantic-ui-react'
import './navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <Menu borderless size='massive' inverted fixed='top' color="black" style={{ minHeight: 80 }}>
                    <Container>
                        <Menu.Item as='a' href='/' className='logo-name'>
                            Beat-Box
                        </Menu.Item>
                        <Menu.Item>
                            <Button.Group>
                                <Button animated onClick={() => this.props.changeHandPosition('left')}>
                                    <Button.Content visible>LH</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='hand paper outline' className='left-hand' />
                                    </Button.Content>
                                </Button>
                                <Button animated onClick={() => this.props.changeHandPosition('right')}>
                                    <Button.Content visible>RH</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='hand paper outline' />
                                    </Button.Content>
                                </Button>
                            </Button.Group>
                        </Menu.Item>
                        <Menu.Item position='right'>
                            <Dropdown item simple text='Select Kit'>
                                <Dropdown.Menu>
                                    <Dropdown.Item as='a' href='/'>
                                        Stranger Beats
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        )
    }
}
