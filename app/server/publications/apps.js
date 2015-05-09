Meteor.publish('apps', function (options) {
  check(options, {
    limit: Number
  });
  return AppsCollection.find();
});
