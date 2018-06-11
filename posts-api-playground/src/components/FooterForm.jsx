import React, { Component } from 'react';

class FooterForm extends Component {
    /*
    |--------------------------------------------------------------------------
    | STATE
    |--------------------------------------------------------------------------
    */

    state = {
        formInput: '',
        error: false
    };

    /*
    |--------------------------------------------------------------------------
    | CALLBACKS
    |--------------------------------------------------------------------------
    */

    handleInputChange = e => {
        this.setState({
            formInput: parseInt(e.target.value)
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const number = this.state.formInput;
        if (number < 1 || number > 100) {
            this.setState(() => {
                return {
                    error: true,
                    formInput: ''
                };
            });
        } else {
            this.props.numberEntered(number);
            this.setState(() => {
                return {
                    error: false,
                    formInput: ''
                };
            });
        }
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
                        {this.state.error ? (
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
                            onChange={this.handleInputChange}
                        />&nbsp;&nbsp;
                        <button type="submit" onClick={this.handleFormSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FooterForm;
