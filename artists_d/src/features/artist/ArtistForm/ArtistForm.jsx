import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class ArtistForm extends Component {
    render() {
        const { handleCancel } = this.props;
        return (
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Band Name</label>
                        <input placeholder="band name" />
                    </Form.Field>
                    <Form.Field>
                        <label>Country</label>
                        <input placeholder="country" />
                    </Form.Field>
                    <Form.Field>
                        <label>Label</label>
                        <input placeholder="label" />
                    </Form.Field>
                    <Form.Field>
                        <label>Best Album</label>
                        <input placeholder="best album" />
                    </Form.Field>
                    <Form.Field>
                        <label>History</label>
                        <input placeholder="history" />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button type="button" onClick={this.props.handleCancel}>
                        Cancel
                    </Button>
                </Form>
            </Segment>
        );
    }
}

export default ArtistForm;
