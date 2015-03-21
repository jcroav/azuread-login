module.exports = function (grunt) {

    grunt.initConfig({
        copy: {
            main: {
                files: [
                  {
                      expand: true,
                      cwd: '../bower_components/polymer/',
                      src: ['polymer.min.js'],
                      dest: 'Scripts'
                  },
                  {
                      expand: true,
                      cwd: '../bower_components/webcomponentsjs/',
                      src: ['webcomponents.min.js'],
                      dest: 'Scripts'
                  },
                  {
                      expand: true,
                      cwd: '../bower_components/jquery/dist',
                      src: ['jquery.min.js'],
                      dest: 'Scripts'
                  }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['copy']);

};