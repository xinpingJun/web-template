//引入gulp， 
var gulp =require('gulp'),
    sass = require("gulp-sass"),
    prefixer = require('gulp-autoprefixer'),
    // 图片压缩
    imagemin = require('gulp-imagemin'),
    // 实时预览
    browserSync = require('browser-sync').create(),
    // 本地服务
    connect = require('gulp-connect'),
    // 路径配置文件
    Config = require('./gulpfile.config.js');


//编译sass //兼容
gulp.task('sass',function () {
    gulp.src(Config.scss.src)
        .pipe(sass({outputStyle: 'compact'}))
        .pipe(prefixer('last 2 versions'))  
        .pipe(gulp.dest(Config.scss.dist));
});

//图片压缩 
gulp.task('images', function () {
    return gulp.src(Config.img.src).pipe(imagemin({
        optimizationLevel: 3
        , progressive: true
        , interlaced: true
    })).pipe(gulp.dest(Config.img.dist));
});

//服务器任务 
gulp.task('server', function() {
    // browserSync.init({
    //     server: {
    //         baseDir: "./"
    //     }
    // });
   /*设置服务器*/
   connect.server({
        root:['./dist'],//要运行哪个目录
        livereload:true,  //是否热更新。
        port:2018  //端口号
    })
    
    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch("./src/images/*.*", ['images']);
    gulp.watch("./src/html/*/*.*",['html']);
    gulp.watch("./src/assets/**",['assets']);
    gulp.watch("./src/api/**",['api']);

});

//把所有html页面扔进dist文件夹(不作处理);
gulp.task('html', function() {
    gulp.src(Config.html.src)
    .pipe(gulp.dest(Config.html.dist));
});

//把所有assets文件扔进dist文件夹(不作处理);
gulp.task('assets', function() {
    gulp.src(Config.assets.src)
    .pipe(gulp.dest(Config.assets.dist));

});

//把所有api文件扔进dist文件夹(不作处理);
gulp.task('api', function() {
    gulp.src(Config.api.src)
    .pipe(gulp.dest(Config.api.dist));

});

// 开发环境任务。
gulp.task('dev',function(){
    gulp.run('html','assets','api','images', 'sass','server',);
});

// 生产环境任务
gulp.task('build',function(){
    gulp.run('html','assets','api','sass','images',);
});
