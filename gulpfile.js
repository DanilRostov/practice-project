"use strict"

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('sass', () => {
	return gulp.src('./app/sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', () => {
	return gulp.src('./app/pug/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./dist'))
});

gulp.task('browserSync', () => {
	browserSync({
		server: {baseDir: 'dist'},
		notify: false
	});
});

gulp.task('start', ['browserSync', 'sass', 'pug'], () => {
	gulp.watch('app/pug/**/*.pug', ['pug']);
	gulp.watch('app/sass/*.scss', ['sass']);
	gulp.watch('dist/*.html', browserSync.reload);
});