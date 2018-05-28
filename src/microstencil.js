const fs = require('fs');
/**
 * Класс, отвечающий загрузку шаблонов
 * 
 * @param {object} templates Объект шаблонов, где свойство - название шаблона, а значение - имя файла для его загрузки
 */
var MicroStencil = function(templates) {
    templates = templates || {};
    this._templates = {};
    for (let t in templates) {
        this._templates[t] = fs.readFileSync(templates[t], {encoding: 'utf8'});
    }
}

/**
 * Метод добавляет шаблон из строки
 * 
 * @param {string} template Название шаблона
 * @param {string} str Строка текста шаблона
 */
MicroStencil.prototype.add = function(template, str) {
    this._templates[template] = str || '';
}

/**
 * Метод осуществляет замену масок шаблона на значения.
 * 
 * @param {string} template название шаблона
 * @param {string} data объект, где свойство - подменяемая переменная, а значение - значение, на которое она будет заменена
 */
MicroStencil.prototype.render = function(template, data) {
    data = data || {};
    let content = this._templates[template] || '';
    let re = /\${([^}]+)?}/, match;
    while (null !== (match = re.exec(content))) {
        let str = data[match[1]] || match[1];
        content = content.replace(match[0], str);
    }
    return content;
}

module.exports = MicroStencil;