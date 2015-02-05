module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            defaultTarget: {
                options: {
                    style: 'compressed',
                    cacheLocation : '../.sass-cache'
                },
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            gruntfile: {
                files: ['gruntfile.js'],
                tasks: ['default']
            },
            sass: {
                files: ['Styles/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Do not add watch to any conf, use grunt watch
    grunt.registerTask('default', ['sass']);
};