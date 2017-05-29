import React from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';

import { generate } from '../imports/api/token'

import Desktop from '../imports/ui/Desktop.jsx';
import Mobile from '../imports/ui/Mobile.jsx';

renderDesktop = () => <Desktop token="1"/> //generate()

Meteor.startup(() => {
  render(
    <Router>
      <Switch>
        <Route exact path='/' render={renderDesktop}/>
        <Route path='/:token' component={Mobile} />
      </Switch>
    </Router>,
    document.getElementById('render-target')
  );
});
