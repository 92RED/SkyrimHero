/* Legacy JS for old browsers
 * SkyrimHero (c) 2012
 * Skyrim (c) Bethesda Softworks
 */
$('html').ready(function (){
	var unsopportedMsg = $('body').html('<style type="text/css">a { color: gold; display: inline-block; text-decoration: none; } a:hover { color: white; } h1 { margin: 5px; }</style><div id="page"><div style="max-width: 960px; margin: 0 auto; font-size: 18px;"><h1 style="display: inline-block; padding: 5px; background: gold; color:#111; width: 175px; font-weight: 300;">SkyrimHero</h1><p style="margin: 5px; background: black; padding: 5px;">Your browser isn\'t supported. Please download the new version; <a href="http://windows.microsoft.com/en-US/internet-explorer/downloads/ie">Internet Explorer 9</a> from Microsoft.<br>If you have reached this page by mistake please <a href="mailto:bugs@skyrimhero.com">report this bug</a><em style="display: block;">Error // Unsupported Web Browser // Internet Explorer 7 or below</em></p></div></div>')
	$('.page').text(unsopportedMsg);
});
