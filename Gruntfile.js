module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                options: {
                   transform: [['babelify', {presets: ['es2015', 'react']}]]
                },
                src: ['src/FrontBundle/Resources/assets/js/**/*.js'],
                dest: 'src/FrontBundle/Resources/public/js/app.js',
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %>, ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'src/FrontBundle/Resources/public/js/app.min.js':
                    ['src/FrontBundle/Resources/public/js/app.js'],
                }
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/FrontBundle/Resources/assets/sass',
                    src: ['**/*.sass'],
                    dest: 'src/FrontBundle/Resources/public/css',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/FrontBundle/Resources/public/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'src/FrontBundle/Resources/public/css',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['src/FrontBundle/Resources/assets/js/**/*.js'],
                tasks: ['browserify', 'uglify:build'],
                options: {
                    spawn: false,
                }
            },
            sass: {
                files: 'src/FrontBundle/Resources/assets/sass/**/*.{scss,sass}',
                tasks: ['sass:dist', 'cssmin']
            }
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};