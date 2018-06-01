import React, { Component } from 'react';
import { Menu, Container} from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
				<Container>
					<Menu.Item header>
						MFX
					</Menu.Item>					
					<Menu.Item name="Search" as="a" />

				</Container>
      </Menu>        
    )
  }
}

export default NavBar

