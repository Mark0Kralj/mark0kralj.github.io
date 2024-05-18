//loader START
$(window).on('load', function() {

    // Ensure the minimum loading time of 2 seconds
    setTimeout(function() {
        $('#loading-screen').fadeOut('slow', function() {
            $('#main-content').fadeIn('slow'); // show content
            $('body, html').css('overflow', 'auto'); // re-enable scrolling
        });
    }, 2000); // 2 seconds minimum
    
});
//loader END