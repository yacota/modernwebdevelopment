//
var scc = (function() {
    var windowlanguage = window.navigator.userLanguage || window.navigator.language;
    //console.log('language es '+windowlanguage);

    // initializing datepicker
    $('#datepicker').datetimepicker({
        language : windowlanguage,
        pickTime: false
    })

    // initializing slider and also registering update listener on slideStop
    $('#slider').slider({
        tooltip : 'hide',
        handle : 'triangle',
        formater: function(value) {
            return value;
        }
    }).on('slideStop', function(ev){
        document.getElementById('span-slider-lower').value = '$'+ev.value[0];
        document.getElementById('span-slider-upper').value = '$'+ev.value[1];
    });

})();