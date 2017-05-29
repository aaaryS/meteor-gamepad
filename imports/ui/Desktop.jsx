import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Actions } from '../api/actions.js';

class Desktop extends Component {
  static propTypes = {
    actions: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui header">Meteor gamepad - Desktop</h1>

          <div className="ui icon message">
            <i className="inbox icon"></i>
            <div className="content">
              <div className="header">
                {`visit ${window.location.href}${this.props.token}`}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default createContainer(({token}) => {
  Meteor.subscribe('actions', token)

  return {
    actions: Actions.find({token}).fetch()
  };
}, Desktop);
