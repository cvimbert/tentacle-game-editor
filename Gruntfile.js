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
                    path: 'cordova',
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
            emulate_android: {
                options: {
                    command: 'emulate',
                    platforms: ['android'],
                    args: ['--target','Nexus5']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-cordovacli');

    grunt.registerTask("dist", ['requirejs:dist']);

};