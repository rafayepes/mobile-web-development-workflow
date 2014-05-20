var phantomcss = require( 'node_modules/phantomcss/phantomcss.js' );

phantomcss.init( {
	screenshotRoot: 'tests/screenshots',
	failedComparisonsRoot: 'tests/failures',
	libraryRoot: 'node_modules/phantomcss'
} );

casper.start( 'http://localhost/mobile-web-development-workflow/' );

casper.viewport( 1024, 768 );

casper.then( function() {
	phantomcss.screenshot( '#header', 'header_screenshot' );
} );

casper.then( function() {
	phantomcss.screenshot( '#footer', 'footer_screenshot' );
} );

casper.then( function() {
	phantomcss.screenshot( '#body', 'home_body_screenshot' );
} );

casper.then( function() {
	casper.click( '#about' );
	phantomcss.screenshot( '#body', 'about_body_screenshot' );
} );

casper.then( function() {
	phantomcss.compareAll();
} );

casper.run( function(){
	phantom.exit( phantomcss.getExitStatus() );
} );
