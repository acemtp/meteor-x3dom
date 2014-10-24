Package.describe({
  name: 'acemtp:x3dom',
  summary: 'Provides X3DOM library modified for use with Meteor.',
  version: '1.5.1_2',
  git: 'https://github.com/acemtp/meteor-x3dom'
});

Package.onUse(function(api) {
  api.export('x3dom', 'client');
  api.addFiles(['x3dom-full.debug.js', 'x3dom.css', 'x3dom.swf', 'meteor-x3dom.js'], 'client');
});
