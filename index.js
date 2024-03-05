const express = require('express');
const app = express(); //app est un objet de l'express
const port = 3000
const AAAAAA=require('./Tp1/moduleTech')
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello world");
});
app.listen(port,(error)=>{
    if(!error)
    console.log(`Ecouter dans le port ${port}`);
else
console.log(`erreur de lancement`);
});


// const technologies = [
//     {"id":1 , "Nom_de_la_technologie":"Internet"             , "Domaine":"Informatique"              , "Date_de_création":"Années 1960"},
//     {"id":2 , "Nom_de_la_technologie":"World Wide Web (WWW)" , "Domaine":"Informatique"              , "Date_de_création":1989},
//     {"id":3 , "Nom_de_la_technologie":"JavaScript"           , "Domaine":"Programmation"             , "Date_de_création":1995},
//     {"id":4 , "Nom_de_la_technologie":"Python"               , "Domaine":"Programmation"             , "Date_de_création":1991},
//     {"id":5 , "Nom_de_la_technologie":"React.js"             , "Domaine":"Développement web"         , "Date_de_création":2013},
//     {"id":6 , "Nom_de_la_technologie":"TensorFlow"           , "Domaine":"Intelligence artificielle" , "Date_de_création":2015},
//     {"id":7 , "Nom_de_la_technologie":"5G"                   , "Domaine":"Télécommunications"        , "Date_de_création":2019},
//     {"id":8 , "Nom_de_la_technologie":"CRISPR"               , "Domaine":"Biotechnologie"            , "Date_de_création":2012},
//     {"id":9 , "Nom_de_la_technologie":"Blockchain"           , "Domaine":"Finance / Informatique"    , "Date_de_création":2008},
//     {"id":10 , "Nom_de_la_technologie":"Quantum Computing"   , "Domaine":"Informatique  / Physique"  , "Date_de_création":"Années 1980s"}
// ]

app.get('/technologies',(req,res)=>{
    res.status(200).json(AAAAAA.tech);
});

app.get('/technologies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const technology = AAAAAA.get(id)
    if (!technology) {
        res.status(404).send('Technologie non trouvée');
    } else {
        res.status(200).json(technology);
    }
});

app.post('/technologies', (req, res) => {
    AAAAAA.tech.push(req.body);
    res.status(201).json(AAAAAA.tech);

});

app.put('/technologies/:id', (req, res) => {
    const id =parseInt(req.params.id);
    const technology=technologies.find(b=>b.id===id);
    technology['Nom_de_la_technologie']=req.body['Nom_de_la_technologie'];
    technology.Domaine=req.body.Domaine;
    technology['Date_de_création']=req.body['Date_de_création'];
    res.status(200).json(technology);
});

app.delete('/technologies/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    let technology = technologies.find(techno => techno.id === id);
    technologies.splice(technologies.indexOf(technology),1);
    res.status(200).json(technologies);
})

//Tp2

