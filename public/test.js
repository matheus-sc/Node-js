"use strict";
/* setTimeout(() => {
    console.log("ablueblue");
    clearInterval(int);
}, 3000);
const int = setInterval(() => {
    console.log("O que que há velhinho?");
}, 1000); 

console.log(__dirname);
console.log(__filename); */

/* const { people, ages } = require('./test2.js');
console.log(people);
console.log(ages); 

Posso usar uma variável ao invés de um objeto ao usar require, assim eu pego todas as variáveis do outro arquivo. Ex.: const xyz ... console.log(xyz.people, xyz.ages) */

/* const os = require('os');
console.log(os.platform(), os.homedir()); */

const fs = require('fs');
/* fs.readFile('txt.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('O que que há, velhinho?'); */

/* fs.writeFile('txt.txt', 'Temporada de pato!', () => {
    console.log('Inscrição feita!');
});

fs.writeFile('txt2.txt', 'ablueblue', () => {
    console.log('Inscrição feita!');
}); */

/* if(!fs.existsSync('../testDir')) {
    fs.mkdir('../testDir', (err) => {
        if(err) console.log(err);
        console.log("Diretório criado!");
    });
} else {
    fs.rmdir('../testDir', (err) => {
        if(err) console.log(err);
        console.log("Diretório removido!");
    });
} */

if(fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err) => {
        if(err) console.log(err);
        console.log('Arquivo deletado!');
    });
}