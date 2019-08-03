import React, { Component } from 'react'
import { Menu, Dropdown, Container } from 'semantic-ui-react'
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
