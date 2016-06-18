angular.module("app").directive("typeDir", function() {


   return {
     restrict: 'AE',
     templateUrl: './views/type.html',
     controller: function() {
        var sections = [
          {sentence : ' is a MEAN Stack web developer.' }
        , {sentence : ' is from Las Cruces, NM. ' }
        , {sentence : ' is learning to code at DevMountain. ' }
        , {sentence : " enjoys a good laugh." }
        , {sentence : " loves him some green chile." }
        , {sentence : ' misses his two spoiled cats.' }
        , {sentence : ' currently lives in Provo, UT. ' }
        , {sentence : " loves exploring outdoors. " }
        , {sentence : ' will to travel the globe. ' }
        , {sentence: ' ;-P'}
        ];

        var i = 0;
        var j = 0;
        var k = 0;
        var forward = true;
        var opening = false;
        var interval = 60;
        var beginning = 'Scott Booth';
        var lengthArray = sections.length;
        var currentPart = ''
        var lengthSentence = 0

        // TYPING
        function writing (text) {
          lengthSentence = sections[i].sentence.length
          if (!opening) { // first part
            setTimeout(function () {
             if (k < beginning.length) {
                if (beginning[k] === '<') {
                  currentPart += ' <br id="brName">'
                  k = k + 4
                }
                currentPart += beginning[k]
                text.html(currentPart)
                k++
                writing(text)
             } else if (k === (beginning.length)) {
                currentPart += ' <br>'
                text.html(currentPart)
                opening = true
                writing(text)
             }
            }, interval)
          } else if (opening) { // sentences
            setTimeout(function () {
             interval = 80
             if (j === lengthSentence) {
                forward = false
             }
             if (j === lengthSentence - 2) {
                $('.afterTyping').one().addClass('onScreen')
             }
             if (j === lengthSentence - 1 && forward) {
                interval = 1000
             }
             if (j < lengthSentence && forward) {
                if (sections[i].sentence[j] === '&') {
                  currentPart += '<strong>'
                } else if (sections[i].sentence[j] === '%') {
                  currentPart += '</strong>'
                } else {
                  currentPart += sections[i].sentence[j]
                }
                text.html(currentPart)
                j++
             } else if (j > 0 && !forward) {
                if (sections[i].sentence[j] === '&') {
                  currentPart = currentPart.slice(0, - 8)
                } else if (sections[i].sentence[j] === '%') {
                  currentPart = currentPart.slice(0, - 9)
                } else {
                  currentPart = currentPart.slice(0, - 1)
                }
                text.html(currentPart)
                j--
             } else if (j === 0) {
                forward = true
                i++ // loops between sections
             }
             if (i === lengthArray) {
                i = 0
             }
             writing(text)
            }, interval)
          }
        }


        //ON LOAD
        $(document).ready(function () {

        // TYPING
          var firstTimer = 100
          var text       = $('.typer')
          setTimeout(function () {
            writing(text)
          }, firstTimer)

        })
 }
}
 })
