import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import ArtistList from '../ArtistList/ArtistList';
import ArtistForm from '../ArtistForm/ArtistForm';

const artistsInfo = [
    {
        id: '1',
        name: 'Soilwork',
        formed: 1995,
        country: 'Sweden',
        label: 'asdf',
        history: 'asdf asdf asdf',
        active: true,
        artistPhotoURL: 'images/soilwork.jpg',
        albums: [
            {
                id: 1,
                name: 'Stabbing The Drama',
                year: 1990,
                label: 'Nuclear Blast',
                description: 'asdf asdf asdf'
            },
            {
                id: 2,
                name: 'The Ride Majestic',
                year: 2015,
                label: 'Nuclear Blast',
                description: 'fdf dfsasdf asdf asdf'
            },
            {
                id: 3,
                name: 'The Living Infinie',
                year: 2013,
                label: 'Nuclear Blast',
                description: 'asdf asdf asdfsdf'
            }
        ]
    },
    {
        id: '2',
        name: 'Deicide',
        formed: 1988,
        country: 'USA',
        label: 'Nuclear Blast',
        history: 'fdsfsd aasdf sa',
        active: true,
        artistPhotoURL: 'images/deicide.jpg',
        albums: [
            {
                id: 1,
                name: 'Once Upon The Cross',
                year: 1995,
                label: 'Nuclear Blast',
                description: 'asdsdfsdafsadf asdf asdf'
            },
            {
                id: 2,
                name: 'Serenity',
                year: 2001,
                label: 'Nuclear Blast',
                description: 'asdsdfsdafsadf asdf asdf'
            }
        ]
    },
    {
        id: '3',
        name: 'Amon Amarth',
        formed: 1997,
        country: 'Sweden',
        label: 'Metal Blade',
        history: 'asdf asdf agdsf gsfdg sdfsdf',
        active: true,
        artistPhotoURL: 'images/amonamarth.jpg',
        albums: [
            {
                id: 1,
                name: 'Twilight Of Gods',
                year: 1999,
                label: 'Metal Blade',
                description: 'asdf asdf asdf'
            },
            {
                id: 1,
                name: 'Hammer Of Wolves',
                year: 2004,
                label: 'Roadrunner',
                description: 'asdf asdf asdf'
            }
        ]
    }
];

class ArtistDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: artistsInfo,
            isOpen: false
        };

        this.handleFormOpen = this.handleFormOpen.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleFormOpen() {
        this.setState({
            isOpen: true
        });
    }

    handleCancel() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
            <Grid>
                <Grid.Column width={12}>
                    <ArtistList artists={this.state.artists} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button
                        onClick={this.handleFormOpen}
                        positive
                        content="Add Artist"
                    />
                    {this.state.isOpen && (
                        <ArtistForm handleCancel={this.handleCancel} />
                    )}
                </Grid.Column>
            </Grid>
        );
    }
}

export default ArtistDashboard;
