Meteor.methods({
  'pingHost': function(host){
    this.unblock();

    var pingRes = Ping.host(host.ip);

    console.log('Host ' + host.ip + ': ' + pingRes.status + ' ' + pingRes.latency + 'ms');
    
    if(pingRes.online){
      HostsCollection.update({_id: host._id},{$set: {
        lastSeen: new Date(),
        latency: pingRes.latency,
        status: pingRes.status
      }});
    } else {
      HostsCollection.update({_id: host._id},{$set: {
        status: pingRes.status
      }});
    }
  }
});
