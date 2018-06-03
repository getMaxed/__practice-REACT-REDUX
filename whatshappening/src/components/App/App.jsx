import React, { Component } from 'react';
import Form from '../Form/Form';
import Timeline from '../Timeline/Timeline';
import Share from '../Share/Share';

class App extends Component {
    state = {
        shares: ''
    };

    handleAddShare = newShare => {
        const updatedShares = [...this.state.shares, newShare];
        this.setState({
            shares: updatedShares
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        <div className="app">
                            <Form addShare={this.handleAddShare} />
                            <Timeline shares={this.state.shares} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
