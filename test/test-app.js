'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('bower-typescript:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({
        'skip-install': true
      })
      .withPrompts({
          componentName: 'my-awesome-module',
          componentDescription: 'Description of my awesome module'
        }
      )
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.editorconfig',
      '.jshintrc',
      '.yo-rc.json',
      '.gitignore',
      'bower.json',
      'gulpfile.js',
      'karma.conf.js',
      'package.json',
      'README.md',
    ]);
  });
});
