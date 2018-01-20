import fs from 'fs';
import path from 'path';
import documentV1 from './v1';

fs.writeFile(path.resolve(path.join('docs','v1','doc.v1.json')), JSON.stringify(documentV1), 'utf8', function (err) {
    if (err) {
        return console.error(err); //eslint-ignore-line
    }

    console.log("The file was saved!");
});
export default {
    v1: documentV1
};