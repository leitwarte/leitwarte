



Meteor.methods({
  'pingHost': function(host){
    this.unblock();
    ping = Meteor.npmRequire('jjg-ping')

    console.log("Performing ping on: " + host.ip)

    ping.system.ping('google.com', function(latency, status) {
        if (status) {
            // Host is reachable/up. Latency should have a value.
            console.log('Google is reachable (' + latency + ' ms ping).');
        }
        else {
            // Host is down. Latency should be 0.
            console.log('Google is unreachable.');
        }
    });


    /*
    
        HostsCollection.update({_id: host._id},{$set: {
          lastSeen: new Date(),
          latency: responseTime[1],
          status: 'online'
        }});
    */

  }
});
