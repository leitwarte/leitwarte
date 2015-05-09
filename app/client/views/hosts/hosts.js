Template.hosts.onCreated(function() {
  this.showModal = new ReactiveVar(false);
});

Template.hosts.helpers({
  showModal: function () {
    console.log('show', Template.instance().showModal.get());
    return Template.instance().showModal.get();
  }
});

// TODO: There must be a more generic/elegant way to show modals
Template.hosts.events({
  'click button#add-host': function (evt,tpl) {
    console.log('show Modal');
    tpl.showModal.set(true);
  },
  'click button.close-modal': function (evt,tpl) {
    console.log('close Modal');
    tpl.showModal.set(false);
  }
});

// the modal template callbacks
// without those the modal is rendered to DOM but not visible
Template.hostForm.onRendered(function(){
  console.log("hostForm template created");
  this.autorun(function(){
    $('.modal').modal('show');
  });
});

Template.hostForm.onDestroyed(function(){
  console.log("hostForm template destroyed");
  this.autorun(function(){
    $('.modal').modal('hide');
  });
});
