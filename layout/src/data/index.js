
// Импортирует все файлы из папки dir, кроме тех что в skip,
// и возвращает словарь {имя_файла_без_расширения: модуль}.
function requireAllFilesFrom({dir, skip=[]}) {
    const skipSet = new Set(skip);
    // Регулярное выражение для выделения имени без расширения.
    const antiExtRe = /([^\.]*)(\.[^\/]+$)?/;
    const names = require("fs")
        // Считываем список файлов из папки
        .readdirSync(dir)
        // Пропускаем те, что в множестве skipSet
        .filter(i => !skipSet.has(i))
        // Отрезаем расширение
        .map(i => antiExtRe.exec(i)[1]);

    const sources = names.reduce(
        (res, name) => {
            res[name] = require(`${dir}/${name}`);
            return res;
        },
        {}
    );

    return sources;
};


const pagesData = requireAllFilesFrom({dir: `${__dirname}/pages`});

console.log("PAGES DATA: ", pagesData);

// Добавляем в данные каждой страницы поле id с именем страницы
for (const [pageId, pageData] of Object.entries(pagesData)) {
    pageData.id = pageId
}

const siteData = {
    pages: pagesData
};

module.exports = {
    siteData
};
