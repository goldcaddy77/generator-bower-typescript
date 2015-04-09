# Yeoman generator for Bower modules written in TypeScript

This is a generator to quickly create Bower modules written in TypeScript using Gulp for a task runner.  The generated Bower module has the following capabilities:

* Transpiles TypeScript to Javascript
* Creates both bower.json and package.json (for npm)
* Automatic bumping of patch version number through a gulp task
* Tests via Karma and Jasmine

## Usage

Install global npm dependencies

        npm install -g yo gulp bower generator-bower-typescript

Make a new directory and `cd` into it:

        mkdir my-new-project && cd $_

Run `bower-typescript`:

        yo bower-typescript

After answering questions about your app, run the example:

        # build your module (compile ts -> js)
        gulp build

        # Set up development link to the module code
        bower link

        # Tie the example to your local bower module link
        cd examples
        bower link my-awesome-module

        # Install your module in the example project
        bower install

        # Open the test page
        open index.html

If you see an alert box that says "Hello World," you're good to go.

## Running Generator Tests

Yeoman uses mocha by default.  To run the tests, first install mocha globally:

        npm install -g mocha

Then run the test suite:

        mocha test/**/*.js      

## Bower Registration

        # Bump the versions in bower.json and package.json, create git tag
        gulp bump
        git push origin master --tags

        # Register on Bower
        bower register <module-name> git://github.com/<git user>/<module-name>.git

## Bumping Your Module Version

The gulpfile contains a task - `bump` - that will bump your module version in bower.json and package.json, create a git tag and commit it locally.  All you need to do is push it to git:

     gulp bump
     git push origin master --tags

## Yeoman Info

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## License

MIT
