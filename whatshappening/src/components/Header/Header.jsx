import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.headerTextRef = React.createRef();
    }

    componentDidMount() {
        this.animateHeaderText();
    }

    animateHeaderText = () => {
        this.headerTextRef.current.classList.add('animate');

        setTimeout(() => {
            this.headerTextRef.current.classList.remove('animate');
            this.headerTextRef.current.classList.add('unAnimate');
            setTimeout(() => {
                this.headerTextRef.current.textContent = '';
            }, 700);
        }, 4000);
    };

    renderStatus() {
        switch (this.props.status) {
            case 'shareCreated':
                return (
                    <span ref={this.headerTextRef} className="text-success">
                        Share has been created
                    </span>
                );
            case 'shareUpdated':
                return (
                    <span ref={this.headerTextRef} className="text-warning">
                        Share has been updated
                    </span>
                );
            case 'shareDeleted':
                return (
                    <span ref={this.headerTextRef} className="text-danger">
                        Share has been deleted
                    </span>
                );
            default:
                console.log(this.props.status);
        }
    }
    render() {
        return (
            <div>
                <div className="upperHeader">
                    <div className="upperHeader_left">
                        {this.renderStatus()}
                    </div>
                    <div className="upperHeader_right">
                        Shares:{' '}
                        <span className="sharesCount">
                            {this.props.shares.length}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
