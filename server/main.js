import { Actions } from '../imports/api/actions.js';

Meteor.publish('actions', token => {
  return Actions.find({token});
});
