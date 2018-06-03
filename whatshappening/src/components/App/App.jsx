import React, { Component } from 'react';
import Form from '../Form/Form';
import Timeline from '../Timeline/Timeline';
import Share from '../Share/Share';
import cuid from 'cuid';

class App extends Component {
    state = {
        shares: {
            id: '',
            body: '',
            time: ''
        }
    };

    handleAddShare = newShare => {
        newShare.id = cuid();
        newShare.time = new Date().getTime();
        const updatedShares = [...this.state.shares, newShare];
        const sortedShares = updatedShares
            .slice()
            .filter(share => share.body !== '')
            .sort((a, b) => a.time - b.time)
            .reverse();
        this.setState({
            shares: sortedShares
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        <div className="app">
                            <Form addShare={this.handleAddShare} />
                            {this.state.shares.body !== '' &&
                                this.state.shares.length !== 0 && (
                                    <Timeline shares={this.state.shares} />
                                )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
