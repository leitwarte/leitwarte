Router.route('/', 'dashboard', {
  name: 'home'
});

// Deployment
Router.route('/deployment', 'deployment', {
  name: 'deployment'
});

// Inventory
Router.route('/inventory/hosts', 'hosts', {
  name: 'hosts'
});

Router.route('/inventory/apps', 'apps', {
  name: 'apps'
});
