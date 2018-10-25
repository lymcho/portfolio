var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// var imagemin = require('gulp-imagemin');

//-------tasks---------------------------------------
//1.sass to css conversion task
gulp.task('sass', function(){
	//the"return here means we want to run this first
	return gulp.src('sass/*.sass')
		.pipe(sass())//using gulp-sass
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});
// //2.Image task - minimize image

// gulp.task('default', () =>
// 	gulp.src('images/*')
// 		.pipe(imagemin([
//     	imagemin.gifsicle({interlaced: true}),
//     	imagemin.jpegtran({progressive: true}),
//     	imagemin.optipng({optimizationLevel: 7}),
//     	imagemin.svgo({plugins: [{removeViewBox: true}]})
// ]))
// 		.pipe(gulp.dest('build/img'))
// );

//2.browser sync task
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			//default root folder
			baseDir:'./'
		},
	})
});


//-------watch---------------------------------------
//watch all file conversion tasks - usuallly in app folder
//making sure ]browser sync & sass] already runs before running watch
gulp.task('watch', ['browserSync','sass'], function(){
	//watch for sass conversions
	gulp.watch('sass/*.sass',['sass']);
	//other watches
	//reload the browser whenever index.html files change
	gulp.watch('*.html').on('change', browserSync.reload);
	//reload all html files in html folder
	gulp.watch('html/*.html').on('change', browserSync.reload);
	//gulp.watch('app/*.js', browserSync.reload);
	
});




//-------deployment-------------------------------------
// gulp.task('default', ['sass', 'image', 'prefix','indexhtmlmin','allhtmlmin','uglify']);




