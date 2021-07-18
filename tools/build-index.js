"use strict";
exports.__esModule = true;
var fs = require("fs");
main();
function main() {
    console.log('BEGIN');
    var ROOT = __dirname + "/../src/articles";
    console.log('ROOT: ', ROOT);
    var articles = [];
    indexArticles(articles, ROOT);
    writeIndex(articles, ROOT + "/index.json");
    console.log('Articles:', articles);
    console.log('END');
}
function writeIndex(articles, path) {
    if (articles.length == 0) {
        throw new Error('Not articles to write.');
    }
    var json = {
        updated: new Date().toISOString(),
        articles: articles
    };
    var data = JSON.stringify(json, null, 2);
    fs.writeFile(path, data, function (err) {
        if (err)
            throw err;
    });
}
function indexArticles(articles, root, path, file) {
    var newPath = join([path, file], '/');
    var fullPath = join([root, path, file], '/');
    console.log('newPath', newPath);
    if (isDir(fullPath)) {
        var files = fs.readdirSync(fullPath);
        files.forEach(function (file) { return indexArticles(articles, root, newPath, file); });
    }
    else if (file === null || file === void 0 ? void 0 : file.match(/\.md$/)) {
        var articlePath_1 = (path === null || path === void 0 ? void 0 : path.substring(1)) || '';
        var tags_1 = [];
        var title_1 = '';
        var img_1 = null;
        var values_1;
        var NAME_REGEXP = /(.+)\.md$/g;
        values_1 = extractText(NAME_REGEXP, file);
        var name_1 = (values_1 ? values_1[0] : file).toLowerCase();
        var id = articlePath_1 + "/" + name_1;
        var imgPath = articlePath_1 + "/" + name_1 + ".jpeg";
        if (fs.existsSync(root + "/" + imgPath)) {
            img_1 = "articles/" + imgPath;
        }
        var lines = readFile(fullPath);
        lines.forEach(function (line) {
            var TITLE_REGEXP = /^\s*#\s+(.+)/g;
            if (!title_1) {
                values_1 = extractText(TITLE_REGEXP, line);
                if (values_1)
                    title_1 = values_1[0];
            }
            var COVER_REGEXP = /^!\[cover\]\((.+)\)/g;
            if (!img_1) {
                values_1 = extractText(COVER_REGEXP, line);
                if (values_1)
                    img_1 = values_1[0];
            }
            var TAG_REGEXP = /#([a-z.]+)/g;
            values_1 = extractText(TAG_REGEXP, line);
            if (values_1) {
                pushTags(tags_1, values_1);
            }
            pushTags(tags_1, (articlePath_1 === null || articlePath_1 === void 0 ? void 0 : articlePath_1.split('/')) || []);
        });
        title_1 = title_1 || name_1;
        var article = {
            id: id,
            title: title_1,
            path: articlePath_1,
            file: file,
            img: img_1,
            tags: tags_1
        };
        articles.push(article);
    }
}
function join(vet, sep) {
    return vet.reduce(function (acc, val) { return (acc || '') + (val ? sep + val : ''); });
}
function pushTags(tags, values) {
    values.forEach(function (value) {
        if (!tags.includes(value)) {
            tags.push(value);
        }
    });
}
function extractText(regexp, str) {
    var values = [];
    var group;
    while ((group = regexp.exec(str))) {
        values.push(group[1]);
    }
    return values.length > 0 ? values : undefined;
}
function readFile(path) {
    var buff = fs.readFileSync(path, 'utf-8');
    var lines = buff.split(/\r?\n/);
    return lines;
}
function isDir(path) {
    try {
        var stat = fs.lstatSync(path);
        return stat.isDirectory();
    }
    catch (ex) {
        return false;
    }
}
