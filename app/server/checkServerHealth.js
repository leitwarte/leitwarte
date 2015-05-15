var checkInterval = ConfigurationCollection.findOne() ? ConfigurationCollection.findOne().checkInterval : 60000;

Meteor.setInterval(function () {
  var hosts = HostsCollection.find({}, {
    fields: {
      ip: 1
    }
  });

  hosts.forEach(function (host) {
    Meteor.call('pingHost', host);
  });
}, checkInterval);
