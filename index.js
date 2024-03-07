import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';


const questions = [
    { type: 'input', message: "Please, type in your URL: ", name: "url"}
];


inquirer.prompt(questions)
.then((answers) => {
    let url = answers.url;
    fs.writeFileSync('URL.txt', url, {encoding: 'utf8'});
    const qrImage = qr.imageSync(url, { type: 'png' });
    fs.writeFileSync('qr-code.png', qrImage);
});


