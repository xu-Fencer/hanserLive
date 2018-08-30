// So vw units work.
// Thanks for this, Mr Coyier.

    // Chrome 26 needs this
    // Safari 6 needs this

    // Firefox 19 doesn't need it
    // IE 10 doesn't need it

		$(function() {

			causeRepaintsOn = $("h1, h2, h3, p");

			$(window).resize(function() {
				causeRepaintsOn.css("z-index", 1);
			});

		});
	