/**
 * Created by Christophe on 04/09/2016.
 */
module.exports = function(grunt){

    grunt.initConfig({
        cordovacli: {
            options: {
                path: 'cordova',
                cli: 'cordova'
            },
            cordova: {
                options: {
                    command: ['create','platform'],
                    platforms: ['android'],
                    id: 'com.blip.gameeditor',
                    name: 'Blip'
                }
            },
            create: {
                options: {
                    command: 'create',
                    id: 'com.blip.gameeditor',
                    name: 'Blip'
                }
            },
            build_android: {
                options: {
                    command: 'build',
                    platforms: ['android']
                }
            },
            run_android: {
                options: {
                    command: 'run',
                    args: ['android']
                }
            },
            emulate_android: {
                options: {
                    command: 'emulate',
                    platforms: ['android']
                }
            }
        },
        clean: {
            cordova: ["cordova/www"],
            dist: ["dist"]
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        src: [
                            "fonts/**",
                            "css/**",
                            "includes/**",
                            "build/**",
                            "js/**",
                            "data/**",
                            "config.js",
                            "app.js",
                            "index_bundle.html"
                        ],
                        dest: "dist"
                    },
                    {
                        cwd: "bower_components/bootstrap",
                        expand: true,
                        src : [
                            "fonts/**"
                        ],
                        dest: "dist"
                    }
                ]
            },
            cordova: {
                files: [
                    {
                        expand: true,
                        src: [
                            "fonts/**",
                            "css/**",
                            "includes/**",
                            "build/**",
                            "js/**",
                            "data/**",
                            "config.js",
                            "app.js",
                            "index_cordova.html"
                        ],
                        dest: "cordova/www"
                    },
                    {
                        cwd: "bower_components/bootstrap",
                        expand: true,
                        src : [
                            "fonts/**"
                        ],
                        dest: "cordova/www"
                    }
                ]
            }
        },
        rename: {
            dist: {
                files: [
                    {
                        src: ['dist/index_bundle.html'], dest: 'dist/index.html'
                    }
                ]
            },
            cordova: {
                files: [
                    {
                        src: ['cordova/www/index_cordova.html'], dest: 'cordova/www/index.html'
                    }
                ]
            }
        },
        requirejs: {
            build: {
                options: {
                    uglify2: {
                        mangle: false
                    },
                    baseUrl: ".",
                    mainConfigFile: "config.js",
                    name: "app",
                    include: [
                        "bower_components/jquery/dist/jquery.js",
                        "bower_components/bootstrap/dist/js/bootstrap.js",
                        "bower_components/angular/angular.js",
                        "bower_components/angular-route/angular-route.js",
                        "bower_components/angular-sanitize/angular-sanitize.js",
                        "bower_components/requirejs/require.js"
                    ],
                    out: "build/require.bundle.js",
                    preserveLicenseComments: false,
                    generateSourceMaps:true,
                    optimize: 'uglify2'
                }
            }
        },
        concat: {
            css: {
                src: [
                    "bower_components/bootstrap/dist/css/bootstrap.css"
                ],
                dest: "build/dependencies.bundle.css"
            }
        }
    });

    grunt.loadNpmTasks('grunt-cordovacli');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-rename');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask("dist", ["clean:dist", "concat:css", "requirejs:build", "copy:dist", "rename:dist"]);
    grunt.registerTask("buildcordova", ["clean:cordova", "concat:css", "requirejs:build", "copy:cordova", "rename:cordova"]);
    grunt.registerTask("run", ["cordovacli:run_android"]);
    grunt.registerTask("build_and_run", ["buildcordova", "run"]);
};