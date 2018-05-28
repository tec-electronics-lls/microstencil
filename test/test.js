const MStencil = require('../src/microstencil');

let mstencil = new MStencil({
    txt: './test/templates/tmpl1.txt',
    html: './test/templates/tmpl2.html'
})

mstencil.add('md', '# Hello ${title}!');

console.log(mstencil.render('txt', {title: 'Roman'}));
console.log(mstencil.render('html', {title: 'Roman'}));
console.log(mstencil.render('md', {title: 'Roman'}));