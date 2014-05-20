module.exports = function( grunt ) {

	grunt.initConfig( {

		watch: {
			files: "scss/*.scss",
			tasks: ['compass'],
		},

		compass: {
			dev: {
				options: {
					sassDir: 'scss',
					cssDir: 'css',
					imagesDir: 'images',
					outputStyle: 'expanded',
					noLineComments: false,
					relativeAssets: true
				}
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src : ['css/*.css', 'js/*.js', '*.php', '*.html']
				},
				options: {
					watchTask: true,
					proxy: 'localhost/mobile-web-development-workflow'
				}
			}
		}

	} );

	grunt.loadNpmTasks( 'grunt-contrib-compass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-browser-sync' );

	grunt.registerTask( 'default', ['browserSync', 'watch'] );

};
