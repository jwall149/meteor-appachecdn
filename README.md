# Offical appcache + cdn for production

## Install

    meteor add jwall149:appcachecdn

## Usage:

#### Copy bundle assets to CDN

#### Config BundledJsCssPrefix
```
  Meteor.startup(function() {
    WebAppInternals.setBundledJsCssPrefix(CDN_URL);
    WebApp.rawConnectHandlers.use('/',
      function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    );
  });
```

#### Config Appcache CDN

```
Meteor.startup(function () {
  Meteor.AppCache.config({
    onlineOnly: ['/assets/'],
    cdnPrefix: CDN_URL
    });
});
```

###Credits:

[Tonny Pham](https://github.com/jwall149)

----

[Official appcache page](https://atmospherejs.com/meteor/appcache)
