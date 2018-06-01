import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ArtistDashboard from '../../features/artist/ArtistDashboard/ArtistDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container className="main">
                    <ArtistDashboard />
                </Container>
            </div>
        );
    }
}

export default App;
