// const { log } = require("console");
const path = require("path");

// console.log(path.sep);
// console.log(process.env.path);
// console.log(path.delimiter);

// const filePAth = '/public_html/home/index.html';

const currentFilePath = __filename
// console.log(currentFilePath);
// console.log(__dirname);

let result = path.basename(currentFilePath);
console.log(result);

let basenameWithoutExt = path.basename(currentFilePath, '.js');
console.log(basenameWithoutExt);

let dirname = path.dirname(currentFilePath)
console.log(dirname);

console.log('ext1 >', path.extname(currentFilePath));
console.log('ext2 >', path.extname('index.md.js'));


let pathTofile = path.format({
    dir: '/punlic_html/home',
    base: 'index.html'
});

console.log('pathTofile > ', pathTofile);

console.log('IsAbsolute', path.isAbsolute(currentFilePath));
console.log('IsAbsolute', path.isAbsolute('/index.js'));
console.log('IsAbsolute', path.isAbsolute('./index.js'));
console.log('IsAbsolute', path.isAbsolute('../index.js'));

let pathToDir = path.join('/home', 'js', 'dist', 'index.js');

console.log('pathToDir > ',pathToDir);

console.log('parse>', path.parse(currentFilePath));

console.log('relative path > ', path.relative('/home/user/config', '/home/user/js/'));

console.log('resolve >', path.resolve());

console.log('normalize >', path.normalize('//home//user//js'));