
module.exports = function(config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '',

		// frameworks to use
		frameworks: [ 'jasmine' ],

		// list of files / patterns to load in the browser
		files: [
			'../lib/moment/moment.js',
			'../lib/jquery/dist/jquery.js',
			'../lib/jquery-ui/ui/jquery-ui.js',

			// for jquery simulate
			'../lib/jquery-simulate-ext/libs/bililiteRange.js',
			'../lib/jquery-simulate-ext/libs/jquery.simulate.js',
			'../lib/jquery-simulate-ext/src/jquery.simulate.ext.js',
			'../lib/jquery-simulate-ext/src/jquery.simulate.drag-n-drop.js',
			'../lib/jquery-simulate-ext/src/jquery.simulate.key-sequence.js',
			'../lib/jquery-simulate-ext/src/jquery.simulate.key-combo.js',
			'../tests/lib/jquery-simulate-hacks.js', // needs to be last

			'../lib/jquery-mockjax/jquery.mockjax.js',
			'../lib/jasmine-jquery/lib/jasmine-jquery.js',
			'../lib/jasmine-fixture/dist/jasmine-fixture.js',
			'../tests/lib/jasmine-ext.js',

			'../dist/fullcalendar.js',
			'../dist/gcal.js',
			'../dist/lang-all.js',
			'../dist/fullcalendar.css',
			'../tests/base.css',
			'../tests/automated/*.js'
		],

		// list of files to exclude
		exclude: [],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: [ 'dots' ],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000
	});
};