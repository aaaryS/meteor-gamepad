import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Actions } from '../api/actions.js';

class Desktop extends Component {
  static propTypes = {
    actions: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired,
  }

  static defaultProps = {
  }

  render() {
    const { deviceorientation } = this.props
    return (
      <div className="ui container">
        <header>
          <h1 className="ui header">Meteor gamepad - Desktop</h1>
          <div className="ui icon yellow tiny message">
            <i className="info icon"></i>
            <div className="content">
              <div className="header">
                {`Visit ${window.location.href}${this.props.token} with you phone.`}
              </div>
            </div>
          </div>
        </header>

        <table className="ui celled table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Type</th>
              <th>Payload</th>
            </tr>
          </thead>
          <tbody>
            {this.props.actions.map(a => (
              <tr key={a._id}>
                <td>
                  {a.createdAt.toString()}
                </td>
                <td>
                  {a.type}
                </td>
                <td>
                  {JSON.stringify(a.payload)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default createContainer(({token}) => {
  Meteor.subscribe('actions', token)

  const actions = Actions.find({token}, { sort: { createdAt: -1 }}).fetch()

  return {
    deviceorientation,
    actions: actions.filter(a => a.type !== 'deviceorientation'),

  };
}, Desktop);
