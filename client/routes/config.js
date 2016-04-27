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

  this.route('numberOneCase', {
    path: '/case/numberOneCase',
    template: 'numberOneCase',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });

  this.route('erzhanCase', {
    path: '/case/erzhanCase',
    template: 'erzhanCase',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });

  this.route('otherCase', {
    path: '/case/otherCase',
    template: 'otherCase',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });

  this.route('cckf', {
    path: '/cckf',
    template: 'cckf',
    yieldTemplates: {
      'header': { to: 'header' },
      'footer': { to: 'footer' },
    }
  });
})
