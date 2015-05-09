Router.configure({
  layoutTemplate: 'masterLayout'
});

Router.plugin('authorizationRequired', {
  authorizationRequiredTemplate: 'authorizationRequired'
});
