import React, { Component } from 'react';
import ArtistListItem from './ArtistListItem';

class ArtistList extends Component {
    render() {
        const { artists, onArtistOpen, deleteArtist } = this.props;
        return (
            <div>
                <h1>Artist List</h1>
                {artists.map(artist => (
                    <ArtistListItem
                        key={artist.id}
                        artist={artist}
                        onArtistOpen={onArtistOpen}
                        deleteArtist={deleteArtist}
                    />
                ))}
            </div>
        );
    }
}

export default ArtistList;
