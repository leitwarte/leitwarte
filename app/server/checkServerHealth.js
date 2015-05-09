
/*
Meteor.setInterval(function(){
  console.log("I should be checking servers");
}, 4000);

var list_of_hosts = ['8.8.8.8'];
function ping (host, callback){
  //do http request here.
  //when finish, call "callback"
  console.log('hello', host);//
function puts(error, stdout, stderr) { sys.puts(stdout) }
var status = exec("ping -c 3 localhost", puts);
  callback(status);
}

function query_host (host){
  ping(host, function (status) {
    //..  do stuff like saving status in database, etc.
    Meteor.setInterval(function() {
      query_host( host );
    }, 10000);
     //queue for next ping in the next predefined interval
    console.log('Status:',status);
  });
}


  query_host('8.8.8.8'); //queue job. Every 2 seconds, query_host will be called.
 */
//function puts(error, stdout, stderr) { sys.puts(stdout) }
//exec("ping -c 3 localhost", puts);


Meteor.setInterval(function(){
  var hosts = ['8.8.8.8', '127.0.0.1', '192.168.2.243'];

  exec = Npm.require('child_process').exec;
  var pingCommand = 'ping -c 1 ';

  hosts.forEach(function(host) {
    var command = pingCommand + host;


    var readResults = function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);

      if(error !== null) {
        console.log('exec error: ' + error);
      }
    };
    console.log('command', command);
    exec(command, readResults);
  });


}, 5000);
