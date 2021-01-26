import React, {Component} from 'react';
import logo from "../assets/images/logo-todo.png"

class TopNacBar extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-header-h1">Daily Tasks</h1>
            </header>
        );
    }
}

export default TopNacBar;