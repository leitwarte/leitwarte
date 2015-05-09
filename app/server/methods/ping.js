Meteor.methods({
  'pingHost': function(host){
    this.unblock();
    exec = Npm.require('child_process').exec;
    var pingCommand = 'ping -c 1 ';
    var command = pingCommand + host.ip;

    var readResults = function (error, stdout, stderr) {
      var re = /time=(\d+.\d+) ms/;
      var responseTime = stdout.match(re);


      if(error !== null) {
        console.log('exec error: ' + error);
        HostsCollection.update({_id: host._id},{$set: {
          status: 'offline'
        }});
      }else {
        console.log(host.ip,responseTime[1]);
        HostsCollection.update({_id: host._id},{$set: {
          lastSeen: new Date(),
          status: 'online'
        }});
      }
    };
    exec(command, Meteor.bindEnvironment(readResults));
  }
})