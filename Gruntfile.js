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
        }
    });

    grunt.loadNpmTasks('grunt-cordovacli');

    grunt.registerTask("dist", ['requirejs:dist']);

};