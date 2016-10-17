/**
 * Created by Christophe on 17/10/2016.
 */
define(["underscore"], function(_) {

    return function (audioDatas) {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var context = new AudioContext();

        var sounds = [];

        var Sound = function (soundDef) {

            this.def = soundDef;
            var soundBuffer;

            var request = new XMLHttpRequest();
            request.open('GET', "audio/" + soundDef.get(file), true);
            request.responseType = 'arraybuffer';

            function onError(e) {
                console.log("erreur de chargement de son : " + soundDef.id);
            }

            request.onload = function () {
                context.decodeAudioData(request.response, function (buffer) {
                    soundBuffer = buffer;
                }, onError);
            };
            request.send();

            this.play = function () {
                var source = context.createBufferSource();
                source.buffer = soundBuffer;
                source.connect(context.destination);
                source.start(0);
            };
        };

        _.each(audioDatas.sounds, function (soundDef) {
            var snd = new Sound(soundDef);
            sounds[soundDef.uid] = snd;
        });


        this.playSound = function (soundId) {
            var snd = sounds[soundId];
            snd.play();
        };
    };
});