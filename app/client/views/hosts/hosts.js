Template.hosts.helpers({
  hosts: function () {
    return Session.get('counter');
  }
});

Template.hosts.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});
