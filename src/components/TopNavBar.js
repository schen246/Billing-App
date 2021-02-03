import React, {Component} from 'react';
import logo from "../assets/images/icon.png"
import {Icon} from 'antd';

class TopNavBar extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-header-h1">Billing Management</h1>

                {this.props.isLoggedIn ?
                    <a className="logout" onClick={this.props.handleLogout} >
                        <Icon type="logout"/>{' '}Logout
                    </a> : null } 
            </header>
        );
    }
}

export default TopNavBar;