var checkInterval = 5000;//ConfigurationCollection.findOne({} ).checkInterval || 5000;
console.log('checkInterval',checkInterval);

Meteor.setInterval(function(){
  var hosts = HostsCollection.find({},{fields: {ip: 1}});// ['8.8.8.8', '8.8.4.4','54.198.183.43','127.0.0.1' ];//,'192.168.2.243'];

  hosts.forEach(function (host) {
    Meteor.call('pingHost', host);
  });


}, checkInterval);
