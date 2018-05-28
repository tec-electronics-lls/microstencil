# Утилита для подстановки значений в шаблоны.

Предполагается, что при запуске приложения, шаблоны будут один раз подгружены из файлов при запуске и в дальнейшем обращения к файлам не будет.

Так же есть возможность добавлять шаблоны из строк после создания экземпляра

## Использование
```javascript
// Подключаем библиотеку
const MicroStencil = require('microstencil');

// Создаем экземпляр с загрузкой из двух файлов
let templates = new MicroStencil({
  template0: './templates/template0.txt',
  template1: './templates/template1.html'
})


// При необходимости добавляем шаблон из строки
templates.add('template2', 'My template text about ${title}.');


// Рендерим данные в шаблон template0
let r0 = templates.render('template0', {
    variable: 'value'
});
console.log(r0);

// Рендерим данные в шаблон template1
let r1 = templates.render('template1', {
    variable1: 'value1',
    variable2: 'value2',
}); 
console.log(r1);

// Рендерим данные в шаблон template2
let data = {
    title: 'you'
};

let r2 = templates.render('template2', data);
console.log(r2);
```