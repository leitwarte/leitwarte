Template.registerHelper('isActiveRoute', function (routeName) {
  if (Router.current().route.getName() === routeName) {
    return 'active';
  }
});

Template.registerHelper('routeIs', function (routeName) {
  if (Router.current().route.getName() === routeName) {
    return true;
  }
});

Template.registerHelper('formatTime', function (timestamp) {
  if (timestamp === undefined) {
    return false;
  };
  var time = moment(timestamp);
  return time.fromNow();
});

Template.registerHelper('label', function (string) {
  switch (string) {
  case 'online':
    style = 'label-success';
    break;
  case 'offline':
    style = 'label-default';
    break;
  default:
    style = 'warning';
    break;
  }
  return style;

});
