Template.hostsOverview.onCreated(function () {
  this.subscribe('hosts', {
    limit: 10
  });
});

Template.hostsOverview.onRendered(function() {
  // TODO: Tooltip not properly initialized
  this.$('.label').tooltip();
});

Template.hostsOverview.helpers({
  hosts: function () {
    return HostsCollection.find();
  }
});
