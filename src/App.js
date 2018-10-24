import React, { Component } from 'react';
import book from './img/agenda.png';
import './App.css';
import NavBar from './components/NavBar';

import UserInfo from './UserInfo';

const blockstack = require('blockstack');

class App extends Component {
  constructor(props) {
    super(props)

    let isSignedIn = this.checkSignedInStatus();

    this.state = {
      isSignedIn,
      person: undefined
    }

    if(isSignedIn) {
      this.loadPerson();
    }

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  checkSignedInStatus() {
    if (blockstack.isUserSignedIn()) {
      return true;
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(function(userData) {
        window.location = window.location.origin
      })
      return false;
    }
  }

  loadPerson() {
    let username = blockstack.loadUserData().username

    blockstack.lookupProfile(username).then((person) => {
      this.setState({ person })
    })
  }

  handleSignIn(event) {
    event.preventDefault();
    blockstack.redirectToSignIn()
  }

  handleSignOut(event) {
    event.preventDefault();
    blockstack.signUserOut(window.location.href)
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <header className="App-header">
          <h1 className="App-title">Little Block Book</h1>
          <image src={book} alt="Little Block Book Logo"></image>
        </header>
        <h2 className='Welcome'>
          Little Block Book is a decentralized dating app built in the BlockStack ecosystem designed bring authenticity back to the dating world.
        </h2>
        <p>
          Little Block Book aims to solve the myriad of problems with current dating applications and sites. Little Block Book gives users ownership of their data and will never sell it. Little Block Book uses Blockstack's rigorous social identification system to make it harder bots, catfish, and stalkers to proliferate in the community. The Blockstack social level determines whether a user can participate in Little Block Book and each Blockstack account can only have one Little Block Book Profile. Users have a right to an alias within Little Block Book, but the Admins will be able to connect it back to a Blockstack profile if necessary.
        </p>

        <p style={{display: this.state.isSignedIn ? 'none' : 'block' }}>
          <button onClick={this.handleSignIn}>
            Sign-in with Blockstack
          </button>
        </p>
        <p style={{display: !this.state.isSignedIn ? 'none' : 'block' }}>
          <UserInfo user={this.state.person} />
          <button onClick={this.handleSignOut}>
            Sign-out
          </button>
        </p>
      </div>
    )
  }
}

export default App;
