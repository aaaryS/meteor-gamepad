import React, { Component, PropTypes } from 'react';

export default class Mobile extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  onClick = (p = this.props) => () => {
    Meteor.call('actions.insert', {
      token: p.match.params.token,
      type: 'click',
    });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui header">Meteor gamepad - Mobile</h1>
          <button className='ui primary basic button' onClick={this.onClick()}>Click me</button>
        </header>
      </div>
    );
  }
}
