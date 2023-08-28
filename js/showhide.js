///////////////////////////////////////////////////
// ShowHide plugin
// Author: Ashley Ford - http://papermashup.com
// Demo: Tutorial - http://papermashup.com/jquery-show-hide-plugin
// Built: 19th August 2011
///////////////////////////////////////////////////
(function ($) {
        $.fn.showHide = function (options) {
            //default vars for the plugin
            var defaults = {
                speed: 1000,
                easing: '',
                changeText: 1,
                showText: 'Show',
                hideText: 'Hide'
            };
            var options = $.extend(defaults, options);
            $(this).click(function () {
                    $('.toggleDiv').fadeOut(options.speed, options.easing);
                    // this var stores which button you've clicked
                    var toggleClick = $(this);
                    // this reads the rel attribute of the button to determine which div id to toggle
                    var toggleDiv = $(this).attr('rel');
                    changeBg(toggleDiv);
                    // here we toggle show/hide the correct div at the right speed and using which easing effect
                    $(toggleDiv).fadeIn(options.speed, options.easing, function() {
                            // this only fires once the animation is completed

                            if(options.changeText==1){

                                $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
                            }
                        }
                    );
                    return false;


                }
            );
        };
    }
)(jQuery);


function changeBg(toggleDiv) {
    let src = $('img').attr('src');
    let address = src.slice(0, src.lastIndexOf('/'));
    if (toggleDiv === "#q0" ||
        toggleDiv === "#q1" ||
        toggleDiv === "#q2" ||
        toggleDiv === "#q3" ||
        toggleDiv === "#q4" ||
        toggleDiv === "#q5" ||
        toggleDiv === "#q6" ||
        toggleDiv === "#q7" ||
        toggleDiv === "#q8" ||
        toggleDiv === "#q9"
    ) {
        $('body').css({
            "background" : "url(./assets/bg.jpg",
            " background-repeat": "no-repeat",
            "background-size": "cover",
            "background-attachment": "fixed",
            "background-position" : "center center"
        });
        $('.layer').css({
            "background" : "none"
        })
    }
}