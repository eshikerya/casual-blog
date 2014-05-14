/*
*	GHOST HIT TOOLTIPS addon
*
*	This plugin comes only with Ghost Hit Themes, 
*	if you need help don't hesitate to ask for help 
*	at ghosthit.com/community
*
*	v0.1.0
*	Copyright (c) 2014 */

$(function ($){

	function capitalmyLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	$('.gh-tooltip').each(function() {
		var definition = $(this).text(),
			wordtip = $(this).data('ghtooltip').toLowerCase(),
			wordtip_up = capitalmyLetter(wordtip),
			wordtip_dot = wordtip+'.',
			tooltip_body = '<span class="tooltip-def acc_txt">'+wordtip+'<p>'+definition+'</p></span>',
			tooltip_body_up = '<span class="tooltip-def acc_txt">'+wordtip_up+'<p>'+definition+'</p></span>';

		$('.tooltip-me p').not('.gh-tooltip').each(function(){
			var initial_p = $(this).html(),
				words_array = initial_p.split(' '),
				final_p = ' ';

				$.each(words_array, function (key, value){
					if (value == wordtip) {
						final_p = final_p +' '+ tooltip_body;
					};
					if (value == wordtip_up) {
						final_p = final_p +' '+ tooltip_body_up;
					};
					if (value == wordtip_dot) {
						final_p = final_p +' '+ tooltip_body+'.';
					};
					if (value.toLowerCase() != wordtip && value.toLowerCase() != wordtip_dot) {
						final_p = final_p +' '+ value;
					};
				});

			$(this).html(final_p);
		});
	});

	function showTooltip (it, at){
		var its_p = it.children('p');

		if (at) {
			it.addClass('activeleft');
		} else {
			it.addClass('activeright');
		}

		TweenMax.to(its_p, 0.6, {
			css: {opacity: 1.0, bottom: 20},
			ease: Power1.easeOut
		});
	}

	function hideTooltip (it){
		var its_p = it.children('p');
		TweenMax.to(its_p, 0.6, {
			css: {opacity: 0.0, bottom: -10},
			ease: Power1.easeOut,
			onComplete: function(){
				it.removeClass('activeleft');
				it.removeClass('activeright');
			}
		});
	}

	$('.tooltip-def').click(function (ev){
		var ign = $(this),
			xPosition = ev.screenX,
			winWidth = $(window).width(),
			at_left = false;

		if (winWidth-xPosition > 200) {
			at_left = true;
		};

		if (ign.hasClass('activeleft') || ign.hasClass('activeright')) {
			hideTooltip(ign, at_left);
			return;
		};
		showTooltip(ign, at_left);
	});
});