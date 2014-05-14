/*
*	MAIN JS FILE for Wordsmith Pro Ghost Theme
*
*	Here you can add custom functionality,
*	if you need help don't hesitate to ask for it
*	at ghosthit.com/community
*
*	Require.js is used for performance optimization and
*	calls the required scripts on context.
*/

requirejs.config({
	paths: {
		h: 'helper',
		config: 'config/config',
		addons: 'ghit-adds'
	}
});

requirejs(['config'],
function (){

// Declare the template variable.
var template;

// Define the template of the current view.
if ($('body').hasClass('post-template')) {
	template = 'post';
} else {
	template = 'home';
}

// Config OPS
if (config.dribbble_user[1]) {
	require(['addons/dribbblewidget'], function(){
		dribbbleExe(config.dribbble_user[0]);
	});
};

if (config.flickr_user[1]) {
	require(['addons/flickrwidget'], function(){
		flickrExe(config.flickr_user[0]);
	});
};

if (config.instagram_user[1]) {
	require(['addons/instawidget'], function(){
		instagramExe(config.instagram_user[0]);
	});
};

// GSAP for INIT animations
// var blog_title = $('#blog_title'),
//     menu = $('#menu_wspro'),
//     blog_description = $('#blog_description');
//
// TweenMax.to( blog_title, 2, {
//     delay: 0.2,
//     css: {opacity: 1.0, paddingRight: 0},
//     ease: Power1.easeOut
// });
//
// TweenMax.to( menu, 2, {
//     delay: 0.6,
//     css: {opacity: 1.0, paddingRight: 0},
//     ease: Power1.easeOut
// });
//
// TweenMax.to( blog_description, 2, {
//     delay: 1,
//     css: {opacity: 1.0, paddingRight: 0},
//     ease: Power1.easeOut
// });


// IF var template is POST Call certain scripts
if (template == 'post') {

	// Helpers
	require(['h/jquery.fitvids'], function(){
		$('#content_wspro').fitVids();
	});

	require(['h/prettify'], function(){
		$('pre').addClass('prettyprint');
		prettyPrint();
	});

	// Addons
	require(['addons/tooltips.ghit'], function(){});
}
});