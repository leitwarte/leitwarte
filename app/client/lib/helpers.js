Template.registerHelper("isActiveRoute", function(routeName) {
  if (Router.current().route.getName() === routeName) {
    return 'active';
  }
});

Template.registerHelper("label", function(string) {
  switch (string)
  {
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