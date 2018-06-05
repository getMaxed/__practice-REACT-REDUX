import React, { Component } from 'react';
import cuid from 'cuid';
import Timeline from '../Timeline/Timeline';
import Share from '../Share/Share';
import Header from '../Header/Header';

const resetInput = {
    id: '',
    body: '',
    createdAt: ''
};

class App extends Component {
    /*
    |--------------------------------------------------------------------------
    | STATE
    |--------------------------------------------------------------------------
    */

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            status: null,
            shares: [],
            formInput: {
                id: '',
                body: '',
                createdAt: ''
            }
        };

        this.textareaRef = React.createRef();
    }

    /*
    |--------------------------------------------------------------------------
    | HANDLERS
    |--------------------------------------------------------------------------
    */

    handleInputChange = e => {
        const shareInput = Object.assign({}, this.state.formInput);
        shareInput[e.target.name] = e.target.value;
        this.setState({
            formInput: shareInput
        });
    };

    handleFormSubmit = e => {
        if (this.state.isEditing === false) {
            e.preventDefault();
            const newState = Object.assign({}, this.state);
            newState.formInput.id = cuid();
            newState.formInput.createdAt = new Date().getTime();
            const newShare = newState.formInput;
            newState.shares = [...this.state.shares, newShare];
            const sortedShares = newState.shares
                .slice()
                .filter(share => share.body !== '')
                .sort((a, b) => a.createdAt - b.createdAt)
                .reverse();
            newState.shares = sortedShares;
            this.setState({
                shares: sortedShares,
                formInput: resetInput,
                status: 'shareCreated'
            });
        } else {
            e.preventDefault();
            const newState = Object.assign({}, this.state);
            const shareToUpdate = this.state.shares.find(
                share => share.id === this.state.formInput.id
            );
            const index = newState.shares.indexOf(shareToUpdate);
            newState.shares[index].body = newState.formInput.body;
            this.setState({
                isEditing: false,
                shares: newState.shares,
                formInput: resetInput,
                status: 'shareUpdated'
            });
        }
    };

    handleOpenEditForm = shareId => () => {
        this.textareaRef.current.focus();
        const updateShareState = Object.assign({}, this.state);
        updateShareState.isEditing === true;
        const shareToUpdate = updateShareState.shares.find(
            share => share.id === shareId
        );

        this.setState({
            isEditing: true,
            formInput: shareToUpdate
        });
    };

    handleFormEditCancel = e => {
        e.preventDefault();

        this.setState({
            isEditing: false,
            formInput: resetInput
        });
    };

    handleDeleteShare = shareId => () => {
        const newState = Object.assign({}, this.state);
        const updatedShares = newState.shares.filter(
            share => share.id !== shareId
        );
        this.setState({
            shares: updatedShares,
            isEditing: false,
            status: 'shareDeleted'
        });
    };

    /*
    |--------------------------------------------------------------------------
    | RENDER
    |--------------------------------------------------------------------------
    */

    render() {
        const buttons = this.state.isEditing ? (
            <div>
                <button type="submit" className="btn btn-success btn-block">
                    Update
                </button>
                <button
                    onClick={this.handleFormEditCancel}
                    className="btn btn-warning btn-block"
                >
                    Cancel
                </button>
            </div>
        ) : (
            <button type="submit" className="btn btn-secondary btn-block">
                Share
            </button>
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        <div className="app">
                            <form onSubmit={this.handleFormSubmit}>
                                {this.state.shares.length !== 0 && (
                                    <Header
                                        shares={this.state.shares}
                                        status={this.state.status}
                                    />
                                )}

                                {this.state.isEditing === false ? (
                                    <h4 className="h4 text-center">
                                        Share what's happening
                                    </h4>
                                ) : (
                                    <h4 className="h4 text-center">
                                        Please edit the text
                                    </h4>
                                )}

                                <div className="form-group">
                                    <textarea
                                        ref={this.textareaRef}
                                        rows="5"
                                        name="body"
                                        className="form-control"
                                        value={this.state.formInput.body}
                                        onChange={this.handleInputChange}
                                    />
                                </div>

                                {buttons}
                            </form>
                            {this.state.shares.body !== '' &&
                                this.state.shares.length !== 0 && (
                                    <Timeline
                                        shares={this.state.shares}
                                        editForm={this.handleOpenEditForm}
                                        deleteShare={this.handleDeleteShare}
                                    />
                                )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
