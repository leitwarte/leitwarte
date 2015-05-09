Template.appsOverview.onCreated(function () {
  this.subscribe('apps', {
    limit: 10
  });
});


Template.appsOverview.helpers({
  apps: function () {
    return AppsCollection.find();
  }
});