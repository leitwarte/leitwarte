var hosts = [
  {
    hostname: 'proxy',
    ip: '192.168.2.74',
    status: 'offline'
  },
  {
    hostname: 'docker1',
    ip: '192.168.2.72',
    status: 'offline'
  },
  {
    hostname: 'cluster1',
    ip: '192.168.2.69',
    status: 'offline'
  },
  {
    hostname: 'cluster2',
    ip: '192.168.2.70',
    status: 'offline'
  },
  {
    hostname: 'docker2',
    ip: '192.168.2.73',
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
