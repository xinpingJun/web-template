var SRC_DIR = './src/';     // 源文件目录  
var DIST_DIR = './dist/';   // 文件处理后存放的目录  
var DIST_FILES = DIST_DIR + '**'; // 目标路径下的所有文件  

var Config = {
    src: SRC_DIR,
    dist: DIST_DIR,
    dist_files: DIST_FILES,

    html: {  
        src: SRC_DIR + 'html/**',  
        dist: DIST_DIR + 'html' 
    },  
    assets: {  
        src: SRC_DIR + 'assets/**',            // assets目录：./src/assets  
        dist: DIST_DIR + 'assets'                // assets文件build后存放的目录：./dist/assets  
    }, 
    api:{
        src:SRC_DIR + 'api/**',
        dist: DIST_DIR + 'api'    
    }, 
    scss: {  
        src: SRC_DIR + 'scss/**/*.scss',         // SASS目录：./src/sass/  
        dist: DIST_DIR + 'css'                   // SASS文件生成CSS后存放的目录：./dist/css  
    },  
    img: {  
        src: SRC_DIR + 'images/**/*',            // images目录：./src/images/  
        dist: DIST_DIR + 'images'                // images文件build后存放的目录：./dist/images  
    }  
};

module.exports = Config;