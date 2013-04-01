$(document).ready(function() {
	function scrollTo(e) {					
		var href = $(this).attr('href');
		if (href.indexOf('#') == 0) {
			var position, destinationItem;
			if (href == '#') {
				position = 0;
			} else {
				destinationItem = $(href);
				position = destinationItem.offset().top - 75;
				var documentHeight = $(document).height();
				var maxScroll = $(document).height() - $(window).height()
				if (position >= maxScroll) {
					position = maxScroll;
				}
			}
			var elToScroll = 'html';
			if ($.browser.safari) {
				elToScroll = 'body'
			}
			
			$(elToScroll).animate(	
				{scrollTop:position}, 
				'slow', 
				'easeOutQuint'
			);
			return false;
		}
	}
	
	$('#portfolioNav ul li a').click(scrollTo);
});