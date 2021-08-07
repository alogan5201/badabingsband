jQuery(function ($) {
  // Local Scroll Speed
  $.localScroll({
    duration: 750,
  });

  // Image Section Height
  /*var windowHeight = $( window ).height();

	$( '.fp1' ) .css({'height': windowHeight +'px'});

	$( window ).resize(function(){

		var windowHeight = $( window ).height();

		$( '.fp1' ) .css({'height': windowHeight +'px'});

	});*/
  function scrollNav() {
    $("#anchor a").click(function () {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($(this).attr("href")).offset().top,
          },
          300
        );
      return false;
    });
  }
  scrollNav();
});
