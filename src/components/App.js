import React, {Component} from 'react';
import TopNavBar from './TopNavBar';
import Main from './Main';
import BottomNavBar from './BottomNavBar';

import { TOKEN_KEY } from '../constants';

export default class App extends Component {
  state = {
    isLoggedIn: false,
  }

  handleLoginSucceed = (data) => {
    localStorage.setItem(TOKEN_KEY, data);
    this.setState({ isLoggedIn: true });
  }

  handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({ isLoggedIn: false });
  }


  render() {
    return (
      <div className="App">
        <TopNavBar />
        <Main
          handleLoginSucceed={this.handleLoginSucceed}
          isLoggedIn={this.state.isLoggedIn}
        />
        <BottomNavBar />
      </div>
    );
  }
}
