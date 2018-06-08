import React, { Component } from 'react';

class FooterForm extends Component {
    /*
    |--------------------------------------------------------------------------
    | STATE
    |--------------------------------------------------------------------------
    */

    state = {
        formInput: ''
    };

    /*
    |--------------------------------------------------------------------------
    | CALLBACKS
    |--------------------------------------------------------------------------
    */

    handleOnInputChange = e => {
        this.setState({
            formInput: e.target.value
        });
    };

    handleOnFormSubmit = e => {
        e.preventDefault();
        const number = this.state.formInput;
        this.props.numberEntered(number);
    };

    /*
    |--------------------------------------------------------------------------
    | RENDER
    |--------------------------------------------------------------------------
    */

    render() {
        return (
            <div className="footer">
                <form>
                    <div className="errorDiv">
                        {this.props.error ? (
                            <label className="error" htmlFor="">
                                Enter a number from 1 to 100 :
                            </label>
                        ) : (
                            <label htmlFor="">
                                Enter a number from 1 to 100 :
                            </label>
                        )}
                    </div>
                    &nbsp;&nbsp;
                    <div className="submitNumber">
                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={this.state.formInput}
                            onChange={this.handleOnInputChange}
                        />&nbsp;&nbsp;
                        <button type="submit" onClick={this.handleOnFormSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FooterForm;
