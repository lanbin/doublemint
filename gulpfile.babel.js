'use strict'

import gulp from 'gulp'
import _ from 'gulp-load-plugins'

const Path = {
	css: '/styles/**/*.less',
	scripts: 'scripts/*.js',

	cssDist: '/.dist/css/',
	scriptsDist: '/.dist/scripts/'
}

var $ = _()

gulp.task('scripts', () =>
	gulp.src(Path.scripts)
	.pipe($.debug())
	.pipe($.plumber())
	.pipe($.uglify())
	.pipe($.plumber())
	.pipe(gulp.dest(Path.scriptsDist))
)


gulp.task('less', () =>
	gulp.src(Path.css)
	.pipe($.less())
	.pipe($.plumber())
	.pipe($.autoprefixer())
	.pipe(gulp.dest(Path.cssDist))
)

gulp.task('default', () =>
	console.log('hello')
)