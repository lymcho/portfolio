// var gulp = require('gulp'),
// 	// uglify = require('gulp-uglify'),
// 	// sass = require('gulp-ruby-sass'),
// 	image = require('gulp-imagemin');

// //scripts: unglify
// gulp.task('scripts', function(){
// 	gulp.src('javascript/*.js')
// 	.pipe(uglify())
// 	.pipe(gulp.dest('build/js'));
// });

// // styles: sass
// gulp.task('styles', function () {
// 	return
//   		sass('sass/**/*.sass')
//     	.pipe(gulp.dest('build/css'));
// });

// Image task
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
	gulp.src('images/*')
		.pipe(imagemin([
    	imagemin.gifsicle({interlaced: true}),
    	imagemin.jpegtran({progressive: true}),
    	imagemin.optipng({optimizationLevel: 7}),
    	imagemin.svgo({plugins: [{removeViewBox: true}]})
]))
		.pipe(gulp.dest('build/img'))
);

//watch: any js changes will run all scripts above
// gulp.task('watch', function(){
// 	gulp.watch('javascript/*.js',['scripts']);
// });

//the order is the order it compiles
// gulp.task('default',['image']);