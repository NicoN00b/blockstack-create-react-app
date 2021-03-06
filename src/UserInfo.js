import React, { Component } from 'react';

import './UserInfo.css';

class UserInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="UserInfo">
        <img className="avatar" alt="This is a User Avatar" src={this.props.user && this.props.user.image[0].contentUrl} />
        <h1>{this.props.user && this.props.user.name}</h1>
      </div>
    )
  }
}

export default UserInfo;
