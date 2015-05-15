var pingWrapped = function(host){
  var Future = Npm.require('fibers/future');
  var ping = Meteor.npmRequire('jjg-ping')
  var future = new Future();
  
  ping.system.ping(host, function(latency, status){
    var statusText = "offline";
    
    status ? statusText = "online" : statusText = "offline"  


    future.return({latency: latency, online: status, status: statusText});
  });

  return future.wait();
}


Meteor.methods({
  'pingHost': function(host){
    this.unblock();

    var pingRes = pingWrapped(host.ip);

    console.log("Host " + host.ip + ": " + pingRes.status + " " + pingRes.latency + "ms")
    
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
