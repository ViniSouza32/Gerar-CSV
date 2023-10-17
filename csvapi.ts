import express from 'express';
import { Router, Request, Response } from 'express';

const app = express();
const route = Router();
app.use(express.json());

route.get('/' , (req: Request, res: Response) => {
    res.json(
        { message: 'Hello' }
    )
})

route.get('/csv', (req: Request, res: Response) => {
    
    let dados = [
        {
            nome: "A",
            fone: "51 999999999",
            cidade: "Lajeado",
        },
        {
            nome: "B",
            fone: "51 999999999",
            cidade: "Lajeado",
        },
        {
            nome: "C",
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

    res.append('Content-Type', 'text/csv');
    res.attachment('output.csv');
    res.send(csv);
});

app.use(route);
app.listen(3333, () => console.log('server running'));