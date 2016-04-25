Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: '404',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' },
  }
});

Router.map(function() {

  // FRONTPAGE
  this.route('loading', {
    path: '/loading',
    template: 'loading',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });
  this.route('index', {
    path: '/',
    template: 'index',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });
})