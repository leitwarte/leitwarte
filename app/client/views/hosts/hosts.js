Template.hosts.onCreated(function() {
  this.showModal = new ReactiveVar(false);
});

Template.hosts.helpers({
  showModal: function () {
    console.log('show', Template.instance().showModal.get());
    return Template.instance().showModal.get();
  }
});

Template.hosts.events({
  'click button#add-host': function (evt,tpl) {
    console.log('show Modal');
    // TODO: Modal is not showing, only HTML gets rendered
    tpl.showModal.set(true);
  }
});
