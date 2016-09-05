var del 				= require('del');
var gulp 				= require('gulp');
var sass 				= require('gulp-sass');
var gulpIf 			= require('gulp-if');
var cache 			= require('gulp-cache');
var coffee 			= require('gulp-coffee');
var cssnano 		= require('gulp-cssnano');
// var imagemin 		= require('gulp-imagemin');
var browserSync = require('browser-sync').create();

gulp.task('default', ['watch']);

gulp.task('sass', function() {
	console.log('compiling SASS files...');
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('coffee', function() {
	return gulp.src('app/coffee/**/*.coffee')
		.pipe(coffee())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	});
});

gulp.task('watch', ['browserSync', 'sass', 'coffee'], function (){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/coffee/**/*.coffee', ['coffee']);
	gulp.watch('app/*.html', browserSync.reload);
});
