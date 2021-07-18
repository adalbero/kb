import * as fs from 'fs';

main();

type Article = {
  id: string;
  title: string;
  path: string;
  name: string;
  file: string;
  img: string | null;
  author: string;
  date: string;
  tags: string[];
};

function main() {
  console.log('BEGIN');

  const ROOT = `${__dirname}/../src/articles`;
  console.log('ROOT: ', ROOT);

  const articles: Article[] = [];

  indexArticles(articles, ROOT);

  writeIndex(articles, `${ROOT}/index.json`);

  console.log('Articles:', articles);

  console.log('END');
}

function writeIndex(articles: Article[], path: string) {
  if (articles.length == 0) {
    throw new Error('Not articles to write.');
  }

  const json = {
    updated: new Date().toISOString(),
    articles,
  };

  const data = JSON.stringify(json, null, 2);

  fs.writeFile(path, data, (err) => {
    if (err) throw err;
  });
}

function indexArticles(
  articles: Article[],
  root: string,
  path?: string,
  file?: string
) {
  const newPath = join([path, file], '/');
  const fullPath = join([root, path, file], '/');

  console.log('newPath', newPath);

  if (isDir(fullPath)) {
    const files: string[] = fs.readdirSync(fullPath);
    files.forEach((file) => indexArticles(articles, root, newPath, file));
  } else if (file?.match(/\.md$/)) {
    const articlePath = path?.substring(1) || '';
    const tags: string[] = [];
    let title: string = '';
    let img: string | null = null;
    let values: string[] | undefined;

    const NAME_REGEXP = /(.+)\.md$/g;
    values = extractText(NAME_REGEXP, file);
    const name = (values ? values[0] : file).toLowerCase();
    const id = `${articlePath}/${name}`;

    const imgPath = `${articlePath}/${name}.jpeg`;
    if (fs.existsSync(`${root}/${imgPath}`)) {
      img = `articles/${imgPath}`;
    }

    const time = fs.statSync(`${root}/${articlePath}/${name}.md`)?.mtime || 'no date';
    const d = new Date(time).toDateString();
    //const time = 123;
    const date = `${d}`;

    const lines = readFile(fullPath);
    lines.forEach((line) => {
      const TITLE_REGEXP = /^\s*#\s+(.+)/g;
      if (!title) {
        values = extractText(TITLE_REGEXP, line);
        if (values) title = values[0];
      }

      const COVER_REGEXP = /^!\[cover\]\((.+)\)/g;
      if (!img) {
        values = extractText(COVER_REGEXP, line);
        if (values) img = values[0];
      }

      const TAG_REGEXP = /#([a-z.]+)/g;
      values = extractText(TAG_REGEXP, line);
      if (values) {
        pushTags(tags, values);
      }

      pushTags(tags, articlePath?.split('/') || []);
    });

    title = title || name;

    const article: Article = {
      id,
      title,
      path: articlePath,
      name,
      file,
      img,
      author: 'adalbero',
      date,
      tags,
    };

    articles.push(article);
  }
}

function join(vet: any[], sep: string): string {
  return vet.reduce((acc, val) => (acc || '') + (val ? sep + val : ''));
}

function pushTags(tags: string[], values: string[]) {
  values.forEach((value) => {
    if (!tags.includes(value)) {
      tags.push(value);
    }
  });
}

function extractText(regexp: RegExp, str: string): string[] | undefined {
  const values: string[] = [];
  let group;
  while ((group = regexp.exec(str))) {
    values.push(group[1]);
  }

  return values.length > 0 ? values : undefined;
}

function readFile(path: string): string[] {
  const buff = fs.readFileSync(path, 'utf-8');
  const lines = buff.split(/\r?\n/);

  return lines;
}

function isDir(path: string) {
  try {
    const stat = fs.lstatSync(path);
    return stat.isDirectory();
  } catch (ex) {
    return false;
  }
}
