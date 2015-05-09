Iron.Router.plugins.authorizationRequired = function (router, options) {
  router.onBeforeAction(function () {
    if (!Meteor.userId()) {
      this.render(this.lookupOption('authorizationRequiredTemplate'));
    } else {
      this.next();
    }
  }, options);
};