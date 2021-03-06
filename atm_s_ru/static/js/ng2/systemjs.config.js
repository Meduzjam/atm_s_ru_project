(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app-sertificates':           'http://127.0.0.1:8000/static/js/ng2/src/sertificates', // 'dist',
    'rxjs':                       'http://127.0.0.1:8000/static/js/ng2/node_modules/rxjs',
    'angular2-in-memory-web-api': 'http://127.0.0.1:8000/static/js/ng2/node_modules/angular2-in-memory-web-api',
    '@angular':                   'http://127.0.0.1:8000/static/js/ng2/node_modules/@angular'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app-sertificates':           { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);