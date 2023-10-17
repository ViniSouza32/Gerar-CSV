import * as fs from 'fs';

let dados = [
    {
        nome: "Someone",
        fone: "51 999999999",
        cidade: "Lajeado",
    },
    {
        nome: "Jhon Doe",
        fone: "51 999999999",
        cidade: "Lajeado",
    },
    {
        nome: "Zé ninguém",
        fone: "51 999999999",
        cidade: "Lajeado",
    },
];

let header = '"Nome";"Fone";"Cidade"\r';
let csv = header;

for (let idx in dados) {
    let pessoa = dados[idx];
    csv += '"' + pessoa.nome + '";"' + pessoa.fone + '";"' + pessoa.cidade + '"\r';
};

console.log(csv);

fs.writeFileSync('output.csv', csv);