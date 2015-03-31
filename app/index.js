'use strict';
var yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay'),
    _ = require('underscore.string'),
    path = require('path');


module.exports = yeoman.generators.Base.extend({

  // priority 1: initialization methods (checking project state, getting configs, etc)
  initializing: function () {
    this.pkg = require('../package.json');
  },

  // Priority 2 - Prompt users for options
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the solid ' + chalk.red('Bower TypeScript') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What do you want to call your bower component? (ex: my-awesome-module)',
      validate: function(input) {
        return input.length > 1 ? true : 'Component must by at least 2 characters';
      }
    }, {
      type: 'input',
      name: 'componentDescription',
      message: 'Provide a short description for your component.'
    }];

    // Uses inquirer.js - https://github.com/SBoudrias/Inquirer.js
    this.prompt(prompts, function (answers) {
      this.componentName = answers.componentName;
      this.componentKey = _.slugify(answers.componentName);
      this.componentClass = _.classify(answers.componentName);

      // TODO: escape quotes
      this.componentDescription = answers.componentDescription;

      done();
    }.bind(this));
  },

  // priority 3
  // - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
  // configuring: function () {

  // priority 4
  // default: function () {

  // priority 5: Where you write the generator specific files (routes, controllers, etc)
  writing: function () {

    var root = this.sourceRoot(),
        files = this.expandFiles('**', { dot: true, cwd: root }),
        dest;

    for (var i = 0; i < files.length; i++) {
      var f = files[i];
      var src = path.join(root, f);
      if(path.basename(f).indexOf('_') === 0){
        dest = path.join(path.dirname(f), path.basename(f).replace(/^_/, ''));
        this.template(src, dest);
      }
      else{
        dest = path.join(f);
        this.copy(src, dest);
      }
    }
  },

  // priority 6: where conflicts are handled (used internally)
  // conflicts: function () {

  // priority 7: where installation are run (npm, bower)
  install: function () {
    var npmPackages = [
      'bower','del','event-stream','gulp','gulp-bump','gulp-concat','gulp-filter',
      'gulp-git','gulp-inject','gulp-tag-version','gulp-typescript','gulp-util',
      'inquirer','requirejs','typescript'
      ];

    this.npmInstall(npmPackages, { 'saveDev': true });
  },

  // priority 8 - called last, cleanup, say good bye, etc
  end: function () {
    this.log("Your new bower module is set up, see the README for development tips");
   }

});
