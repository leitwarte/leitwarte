var hosts = [
  {
    hostname: 'docker1.example.org',
    ip: '192.168.2.43',
    status: 'offline'
  },
  {
    hostname: 'dockers.example.org',
    ip: '192.168.2.34',
    status: 'online'
  }
];

Meteor.startup(function () {
  if (HostsCollection.find().count() === 0) {


    while (hosts.length > 0) {
      HostsCollection.insert(hosts.pop());
    }
    console.log('Added fixtures');
  }
});
