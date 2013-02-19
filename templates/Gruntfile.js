module.exports = function( grunt ) {
  'use strict';
  //
  // Grunt configuration:
  //
  // https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
  //
  grunt.initConfig({

    // Project configuration
    // ---------------------

    // specify an alternate install location for Bower
    bower: {
      dir: 'app/components'
    },

    // Coffee to JS compilation
    coffee: {
      compile: {
        files: {
          'temp/scripts/*.js': 'app/scripts/**/*.coffee'
        },
        options: {
          basePath: 'app/scripts'
        }
      }
    },

    // compile .scss/.sass to .css using Compass
    compass: {
      dist: {
        // http://compass-style.org/help/tutorials/configuration-reference/#configuration-properties
        options: {
          css_dir: 'temp/styles',
          sass_dir: 'app/styles',
          images_dir: 'app/images',
          javascripts_dir: 'temp/scripts',
          force: true
        }
      }
    },

    // generate application cache manifest
    manifest:{
      dest: ''
    },

    // headless testing through PhantomJS
    mocha: {
      all: ['test/**/*.html']
    },

    // default watch configuration
    watch: {
      js: {
        files: ['Gruntfile.js', 'app/scripts/**/*dev.js'],
        tasks: 'js modernizr reload'
      },
      compass: {
        files: [
          'app/styles/**/*.{scss,sass}'
        ],
        tasks: 'compass modernizr reload'
      },
      reload: {
        files: [
          'app/*.html',
          'app/styles/**/*.css',
          'app/scripts/**/*.js',
          'app/images/**/*'
        ],
        tasks: 'reload'
      }
    },

    // default lint configuration, change this to match your setup:
    // https://github.com/cowboy/grunt/blob/master/docs/task_lint.md#lint-built-in-task
    lint: {
      files: [
        'Gruntfile.js',
        'app/scripts/**/*.js',
        'spec/**/*.js'
      ]
    },

    // specifying JSHint options and globals
    // https://github.com/cowboy/grunt/blob/master/docs/task_lint.md#specifying-jshint-options-and-globals
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: false,
        $: false,
        alert: false,
        i: true,
        j: true,
        k: true
      }
    },

    //Beautify tasks
    beautify: {
        files: '<config:lint.files>'
    },
    beautifier: {
        options: {
            indentSize: 4
        }
    },


        

    //Add the modernizr task with the following configuration
    modernizr: {
        // [REQUIRED] Path to the build you're using for development.
        "devFile": "app/vendor/js/modernizr.dev.js",

        // [REQUIRED] Path to save out the built file.
        "outputFile": "app/vendor/js/modernizr.min.js",

        // Based on default settings on http://modernizr.com/download/
        "extra": {
            "shiv": true,
            "printshiv": false,
            "load": true,
            "mq": false,
            "cssclasses": true
        },

        // Based on default settings on http://modernizr.com/download/
        "extensibility": {
            "addtest": false,
            "prefixed": false,
            "teststyles": false,
            "testprops": false,
            "testallprops": false,
            "hasevents": false,
            "prefixes": false,
            "domprefixes": false
        },

        // By default, source is uglified before saving
        "uglify": true,

        // Define any tests you want to impliticly include.
        "tests": [],

        // By default, this task will crawl your project for references to Modernizr tests.
        // Set to false to disable.
        "parseFiles": true,

        // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files.
        // You can override this by defining a "files" array below.
        // "files" : [],
        // When parseFiles = true, matchCommunityTests = true will attempt to
        // match user-contributed tests.
        "matchCommunityTests": false,

        // Have custom Modernizr tests? Add paths to their location here.
        "customTests": [],

        // Files added here will be excluded when looking for Modernizr refs.
        "excludeFiles": ['temp/**/*', 'dist/**/*', 'node_modules/**/*', 'test/**/*', 'components/**/*', 'app/components/**/*']
    },
    shell: {

    },

    // Build configuration
    // -------------------

    // the staging directory used during the process
    staging: 'temp',
    // final build output
    output: 'dist',

    mkdirs: {
      staging: 'app/'
    },

    // Below, all paths are relative to the staging directory, which is a copy
    // of the app/ directory. Any .gitignore, .ignore and .buildignore file
    // that might appear in the app/ tree are used to ignore these values
    // during the copy process.

    // concat css/**/*.css files, inline @import, output a single minified css
    css: {
      'styles/main.css': ['styles/**/*.css']
    },

    // renames JS/CSS to prepend a hash of their contents for easier
    // versioning
    rev: {
      js: 'scripts/**/*.js',
      css: 'styles/**/*.css',
      img: 'images/**'
    },

    // usemin handler should point to the file containing
    // the usemin blocks to be parsed
    'usemin-handler': {
      html: 'index.html'
    },

    // update references in HTML/CSS to revved files
    usemin: {
      html: ['**/*.html'],
      css: ['**/*.css']
    },

    // HTML minification
    html: {
      files: ['**/*.html']
    },

    // Optimizes JPGs and PNGs (with jpegtran & optipng)
    img: {
      dist: '<config:rev.img>'
    },

    // rjs configuration. You don't necessarily need to specify the typical
    // `path` configuration, the rjs task will parse these values from your
    // main module, using http://requirejs.org/docs/optimization.html#mainConfigFile
    //
    // name / out / mainConfig file should be used. You can let it blank if
    // you're using usemin-handler to parse rjs config from markup (default
    // setup)
    rjs: {
      // no minification, is done by the min task
      optimize: 'none',
      baseUrl: './scripts',
      wrap: true,
      name: 'main'
    },
  });

  // Alias the `test` task to run the `mocha` task instead
  grunt.registerTask('test', 'mocha');
  grunt.loadNpmTasks('grunt-beautify');
  grunt.loadNpmTasks('grunt-modernizr');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('js', 'beautify lint');

};
