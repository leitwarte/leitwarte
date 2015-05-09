Template.hostsOverview.helpers({
  hosts: function () {
    return HostsCollection.find();
  }
});
