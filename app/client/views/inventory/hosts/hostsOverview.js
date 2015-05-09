Template.hostsOverview.helpers({
  hosts: function () {
    return HostsCollection.find();
  }
});


Template.hostsOverview.events({
  'click .edit-host': function(evt,tpl){
    Session.set('selectedHost', $(evt.currentTarget).attr('data-id'));
  }
})