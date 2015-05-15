var checkInterval = ConfigurationCollection.findOne().checkInterval;
console.log('checkInterval', checkInterval);

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
