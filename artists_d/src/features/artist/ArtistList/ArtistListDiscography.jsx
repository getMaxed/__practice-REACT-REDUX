import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class ArtistListDiscography extends Component {
    render() {
        const { album } = this.props;
        return (
            <List.Item>
                {album.name} - {album.year}
            </List.Item>
        );
    }
}

export default ArtistListDiscography;
