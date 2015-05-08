Package.describe({
  name: 'jwall149:appcachecdn',
  summary: "Offical appcache + cdn",
  version: "1.0.0",
  git: "https://github.com/jwall149/meteor-appachecdn"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');

  api.use('webapp', 'server');
  api.use('reload', 'client');
  api.use('routepolicy', 'server');
  api.use('underscore', 'server');
  api.use('autoupdate', 'server', {weak: true});
  api.addFiles('appcache-client.js', 'client');
  api.addFiles('appcache-server.js', 'server');
});