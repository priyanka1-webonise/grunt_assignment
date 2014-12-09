module.exports = function(grunt) {


grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  concat: {
    js: {
        src: [
            'js/example.js',
            'js/main.js'
        ],
        dest: 'build/final.js',
    },
    css: {
        src:[
            'css/style.css',
            'css/style1.css'
        ],
        dest: 'build/final.css',
    },
  },
  uglify: {
    my_target: {
      files: {
        'build/output.min.js': ['build/final.js']
      }
    }
  },
  cssmin: {
    combine: {
      files: {
        'build/output.min.css': ['build/final.css']
      }
    },
  },
  smoosher: {
    all: {
        options: {
          jsDir: "build/output.min.js",
          cssDir: "build/output.min.css"
        },
        files: {
          'build/final.html': 'source.html',
        },
    },
  },
});


    // grunt.loadNpmTasks('grunt-contrib-uglify');

  // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');

// Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-inline');


    grunt.loadNpmTasks('grunt-html-smoosher');


  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','uglify','cssmin','smoosher']);
};
