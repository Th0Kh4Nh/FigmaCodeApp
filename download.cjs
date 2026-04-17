const fs = require('fs');
const https = require('https');
const path = require('path');

const data = [
  {"id":"yys2ki5q7eemo2dsz2r","url":"https://api.builder.io/api/v1/file/assets/TEMP/yys2ki5q7eemo2dsz2r","fileName":".figma-design-iPhone 17 - 23.figma.html","frameName":"iPhone 17 - 23"},
  {"id":"80khazyd5tkmo2dsz2x","url":"https://api.builder.io/api/v1/file/assets/TEMP/80khazyd5tkmo2dsz2x","fileName":".figma-design-iPhone 17 - 26.figma.html","frameName":"iPhone 17 - 26"},
  {"id":"keolrqw6qhrmo2dsz34","url":"https://api.builder.io/api/v1/file/assets/TEMP/keolrqw6qhrmo2dsz34","fileName":".figma-design-iPhone 17 - 32.figma.html","frameName":"iPhone 17 - 32"},
  {"id":"0uu1lvmhriojmo2dsz3a","url":"https://api.builder.io/api/v1/file/assets/TEMP/0uu1lvmhriojmo2dsz3a","fileName":".figma-design-iPhone 17 - 35.figma.html","frameName":"iPhone 17 - 35"},
  {"id":"c65v0y01l6lmo2dsz3i","url":"https://api.builder.io/api/v1/file/assets/TEMP/c65v0y01l6lmo2dsz3i","fileName":".figma-design-iPhone 17 - 38.figma.html","frameName":"iPhone 17 - 38"},
  {"id":"24odk0hmfcmo2dsz3p","url":"https://api.builder.io/api/v1/file/assets/TEMP/24odk0hmfcmo2dsz3p","fileName":".figma-design-iPhone 17 - 44.figma.html","frameName":"iPhone 17 - 44"},
  {"id":"ahc86l71v1smo2dsz3y","url":"https://api.builder.io/api/v1/file/assets/TEMP/ahc86l71v1smo2dsz3y","fileName":".figma-design-1.figma.html","frameName":"1"},
  {"id":"92hcmrqfhifmo2dsz41","url":"https://api.builder.io/api/v1/file/assets/TEMP/92hcmrqfhifmo2dsz41","fileName":".figma-design-3.figma.html","frameName":"3"},
  {"id":"ptsnnnqebmo2dsz43","url":"https://api.builder.io/api/v1/file/assets/TEMP/ptsnnnqebmo2dsz43","fileName":".figma-design-4.figma.html","frameName":"4"},
  {"id":"2jrewrf6ydsmo2dsz46","url":"https://api.builder.io/api/v1/file/assets/TEMP/2jrewrf6ydsmo2dsz46","fileName":".figma-design-5.figma.html","frameName":"5"},
  {"id":"vk12tl5kxgmo2dsz49","url":"https://api.builder.io/api/v1/file/assets/TEMP/vk12tl5kxgmo2dsz49","fileName":".figma-design-6.figma.html","frameName":"6"},
  {"id":"49eumqvq5o1mo2dsz4b","url":"https://api.builder.io/api/v1/file/assets/TEMP/49eumqvq5o1mo2dsz4b","fileName":".figma-design-7.figma.html","frameName":"7"},
  {"id":"muyhevlwblomo2dsz4f","url":"https://api.builder.io/api/v1/file/assets/TEMP/muyhevlwblomo2dsz4f","fileName":".figma-design-8.figma.html","frameName":"8"},
  {"id":"jl0dz70y97mo2dsz4i","url":"https://api.builder.io/api/v1/file/assets/TEMP/jl0dz70y97mo2dsz4i","fileName":".figma-design-9.figma.html","frameName":"9"},
  {"id":"2ge3ukkf05cmo2dsz4k","url":"https://api.builder.io/api/v1/file/assets/TEMP/2ge3ukkf05cmo2dsz4k","fileName":".figma-design-10.figma.html","frameName":"10"},
  {"id":"41w35pwvn1lmo2dsz4n","url":"https://api.builder.io/api/v1/file/assets/TEMP/41w35pwvn1lmo2dsz4n","fileName":".figma-design-14.figma.html","frameName":"14"},
  {"id":"e8qwz9ti33tmo2dsz4q","url":"https://api.builder.io/api/v1/file/assets/TEMP/e8qwz9ti33tmo2dsz4q","fileName":".figma-design-12.figma.html","frameName":"12"},
  {"id":"dcea1g6563omo2dsz4t","url":"https://api.builder.io/api/v1/file/assets/TEMP/dcea1g6563omo2dsz4t","fileName":".figma-design-11.figma.html","frameName":"11"},
  {"id":"8rgfwzzgj9gmo2dsz4x","url":"https://api.builder.io/api/v1/file/assets/TEMP/8rgfwzzgj9gmo2dsz4x","fileName":".figma-design-13.figma.html","frameName":"13"},
  {"id":"9ts8rksdjcmo2dsz4z","url":"https://api.builder.io/api/v1/file/assets/TEMP/9ts8rksdjcmo2dsz4z","fileName":".figma-design-15.figma.html","frameName":"15"},
  {"id":"nly55yy69qmo2dsz51","url":"https://api.builder.io/api/v1/file/assets/TEMP/nly55yy69qmo2dsz51","fileName":".figma-design-16.figma.html","frameName":"16"},
  {"id":"3x6kd5pxra6mo2dsz54","url":"https://api.builder.io/api/v1/file/assets/TEMP/3x6kd5pxra6mo2dsz54","fileName":".figma-design-17.figma.html","frameName":"17"},
  {"id":"exyyc1vta9emo2dsz57","url":"https://api.builder.io/api/v1/file/assets/TEMP/exyyc1vta9emo2dsz57","fileName":".figma-design-18.figma.html","frameName":"18"},
  {"id":"er638tabyfmo2dsz5a","url":"https://api.builder.io/api/v1/file/assets/TEMP/er638tabyfmo2dsz5a","fileName":".figma-design-19.figma.html","frameName":"19"},
  {"id":"23lu4j4uiyimo2dsz5e","url":"https://api.builder.io/api/v1/file/assets/TEMP/23lu4j4uiyimo2dsz5e","fileName":".figma-design-20.figma.html","frameName":"20"},
  {"id":"j1iutq39qenmo2dsz5g","url":"https://api.builder.io/api/v1/file/assets/TEMP/j1iutq39qenmo2dsz5g","fileName":".figma-design-iPhone 17 - 3.figma.html","frameName":"iPhone 17 - 3"},
  {"id":"xmsmc0fedemo2dsz5j","url":"https://api.builder.io/api/v1/file/assets/TEMP/xmsmc0fedemo2dsz5j","fileName":".figma-design-iPhone 17 - 4.figma.html","frameName":"iPhone 17 - 4"},
  {"id":"15vp3ced165mo2dsz5m","url":"https://api.builder.io/api/v1/file/assets/TEMP/15vp3ced165mo2dsz5m","fileName":".figma-design-iPhone 17 - 5.figma.html","frameName":"iPhone 17 - 5"},
  {"id":"r8hsuhlbb6emo2dsz5q","url":"https://api.builder.io/api/v1/file/assets/TEMP/r8hsuhlbb6emo2dsz5q","fileName":".figma-design-iPhone 17 - 6.figma.html","frameName":"iPhone 17 - 6"},
  {"id":"12d91mdjejjmo2dsz5v","url":"https://api.builder.io/api/v1/file/assets/TEMP/12d91mdjejjmo2dsz5v","fileName":".figma-design-iPhone 17 - 1.figma.html","frameName":"iPhone 17 - 1"},
  {"id":"5hh81adfcnfmo2dsz5y","url":"https://api.builder.io/api/v1/file/assets/TEMP/5hh81adfcnfmo2dsz5y","fileName":".figma-design-iPhone 17 - 2.figma.html","frameName":"iPhone 17 - 2"},
  {"id":"u38adonfbjmo2dsz61","url":"https://api.builder.io/api/v1/file/assets/TEMP/u38adonfbjmo2dsz61","fileName":".figma-design-iPhone 17 - 7.figma.html","frameName":"iPhone 17 - 7"},
  {"id":"yo7jy3mm61mo2dsz65","url":"https://api.builder.io/api/v1/file/assets/TEMP/yo7jy3mm61mo2dsz65","fileName":".figma-design-iPhone 17 - 8.figma.html","frameName":"iPhone 17 - 8"},
  {"id":"g3lwoywqvlmo2dsz6a","url":"https://api.builder.io/api/v1/file/assets/TEMP/g3lwoywqvlmo2dsz6a","fileName":".figma-design-iPhone 17 - 9.figma.html","frameName":"iPhone 17 - 9"},
  {"id":"q911f9uq9a8mo2dsz6e","url":"https://api.builder.io/api/v1/file/assets/TEMP/q911f9uq9a8mo2dsz6e","fileName":".figma-design-iPhone 17 - 10.figma.html","frameName":"iPhone 17 - 10"},
  {"id":"n6rsw7sq9imo2dsz6i","url":"https://api.builder.io/api/v1/file/assets/TEMP/n6rsw7sq9imo2dsz6i","fileName":".figma-design-iPhone 17 - 15.figma.html","frameName":"iPhone 17 - 15"},
  {"id":"f3kv21zucz9mo2dsz6l","url":"https://api.builder.io/api/v1/file/assets/TEMP/f3kv21zucz9mo2dsz6l","fileName":".figma-design-iPhone 17 - 16.figma.html","frameName":"iPhone 17 - 16"},
  {"id":"v94vgf0921mo2dsz6p","url":"https://api.builder.io/api/v1/file/assets/TEMP/v94vgf0921mo2dsz6p","fileName":".figma-design-iPhone 17 - 20.figma.html","frameName":"iPhone 17 - 20"}
];

const dir = path.join(__dirname, 'public', 'html_screens');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const item of data) {
    const dest = path.join(dir, `${item.frameName}.html`);
    console.log(`Downloading ${item.frameName}...`);
    await download(item.url, dest);
  }
  console.log('All downloaded!');
}

run();
