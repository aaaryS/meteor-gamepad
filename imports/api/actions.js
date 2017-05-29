import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Actions = new Mongo.Collection('actions');


Meteor.methods({
  'actions.insert'(object) {
    check(object, Object);

    Actions.insert({
      ...object,
      createdAt: new Date(),
    });
  },
});
