/*!
 * dyYouTubeLazyLoadJS
 *
 * Author: Yusuf Shakeel
 * https://github.com/yusufshakeel
 *
 * GitHub Link: https://github.com/yusufshakeel/dyYouTubeLazyLoadJS
 *
 * MIT license
 * Copyright (c) 2019 Yusuf Shakeel
 *
 * Date: 2017-12-29 Fri
 */

/*! dyYouTubeLazyLoadJS | (c) 2018 Yusuf Shakeel | https://github.com/yusufshakeel/dyYouTubeLazyLoadJS */

module.exports = function (grunt) {

    // project configurations
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    "src/css/dyYouTubeLazyLoad.css": "src/scss/dyYouTubeLazyLoad.scss",
                }
            }
        },

        cssmin : {
            target : {
                src : ["src/css/dyYouTubeLazyLoad.css"],
                dest : "dist/css/dyYouTubeLazyLoad.min.css"
            }
        },

        uglify: {
            distVersion: {
                options: {
                    banner: "/*! dyYouTubeLazyLoadJS v<%= pkg.version %> | https://github.com/yusufshakeel/dyYouTubeLazyLoadJS | MIT License | Copyright (c) 2019 Yusuf Shakeel %> */",
                    mangle: true
                },
                files: {
                    'dist/js/dyYouTubeLazyLoad.min.js': [
                        'src/js/dyYouTubeLazyLoad.js'
                    ]
                }
            }
        }

    });

    // load plugin
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // create default task
    grunt.registerTask("default", ["sass", "cssmin", "uglify:distVersion"]);

};