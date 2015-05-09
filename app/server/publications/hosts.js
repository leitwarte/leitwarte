Meteor.publish('hosts', function (options) {
  check(options, {
   limit: Number
 });
  return HostsCollection.find();
});
