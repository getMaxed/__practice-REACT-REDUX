import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyArtist = {
    name: '',
    country: '',
    label: '',
    bestAlbum: '',
    history: ''
};

class ArtistForm extends Component {
    state = {
        artist: {
            artist: emptyArtist
        }
    };

    componentDidMount() {
        if (this.props.selectedArtist !== null) {
            this.setState({
                artist: this.props.selectedArtist
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedArtist !== this.props.selectedArtist) {
            this.setState({
                artist: nextProps.selectedArtist || emptyArtist
            });
        }
    }

    onFormSubmit = e => {
        e.preventDefault();
        /*
        |--------------------------------------------------------------------------
        | only existing artists have ids
        |--------------------------------------------------------------------------
        */
        if (this.state.artist.id) {
            this.props.updateArtist(this.state.artist);
        } else {
            this.props.addArtist(this.state.artist);
        }
    };

    onInputChange = e => {
        const newArtist = Object.assign({}, this.state.artist);
        newArtist[e.target.name] = e.target.value;
        this.setState({
            artist: newArtist
        });
    };

    render() {
        const { handleCancel } = this.props;
        const { artist } = this.state;
        return (
            <Segment>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Field>
                        <label>Artist Name</label>
                        <input
                            name="name"
                            onChange={this.onInputChange}
                            value={artist.name}
                            placeholder="artist name"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Country</label>
                        <input
                            name="country"
                            onChange={this.onInputChange}
                            value={artist.country}
                            placeholder="country"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Label</label>
                        <input
                            name="label"
                            onChange={this.onInputChange}
                            value={artist.label}
                            placeholder="label"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Best Album</label>
                        <input
                            name="bestAlbum"
                            onChange={this.onInputChange}
                            value={artist.bestAlbum}
                            placeholder="best album"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>History</label>
                        <input
                            name="history"
                            onChange={this.onInputChange}
                            value={artist.history}
                            placeholder="history"
                        />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button type="button" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Form>
            </Segment>
        );
    }
}

export default ArtistForm;
