import React, { Component } from 'react';
import { Segment, Icon, Item, List, Button, Header } from 'semantic-ui-react';
import ArtistListDiscography from './ArtistListDiscography';

class ArtistListItem extends Component {
    render() {
        const { artist } = this.props;
        return (
            <Segment.Group>
                <Segment>
                    <Header
                        content={artist.name}
                        textAlign="center"
                        size="huge"
                    />
                </Segment>
                <Segment>
                    <Item.Group>
                        <Item>
                            <List>
                                <List.Content>
                                    <List.Item>
                                        Formed: {artist.formed}
                                    </List.Item>
                                    <List.Item>
                                        Country: {artist.country}
                                    </List.Item>
                                    <List.Item>Label: {artist.label}</List.Item>
                                </List.Content>
                            </List>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment secondary>
                    <List>
                        {artist.albums.map(album => (
                            <ArtistListDiscography
                                key={album.id}
                                album={album}
                            />
                        ))}
                    </List>
                </Segment>
                <Segment clearing>
                    <span>{artist.history}</span>
                    <Button
                        as="a"
                        color="teal"
                        floated="right"
                        content="View"
                    />
                </Segment>
            </Segment.Group>
        );
    }
}

export default ArtistListItem;
