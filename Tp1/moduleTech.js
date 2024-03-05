exports.tech= 
    Technologie=[
    {"id":1 , "Nom_de_la_technologie":"Internet"             , "Domaine":"Informatique"              , "Date_de_création":"Années 1960"},
    {"id":2 , "Nom_de_la_technologie":"World Wide Web (WWW)" , "Domaine":"Informatique"              , "Date_de_création":1989},
    {"id":3 , "Nom_de_la_technologie":"JavaScript"           , "Domaine":"Programmation"             , "Date_de_création":1995},
    {"id":4 , "Nom_de_la_technologie":"Python"               , "Domaine":"Programmation"             , "Date_de_création":1991},
    {"id":5 , "Nom_de_la_technologie":"React.js"             , "Domaine":"Développement web"         , "Date_de_création":2013},
    {"id":6 , "Nom_de_la_technologie":"TensorFlow"           , "Domaine":"Intelligence artificielle" , "Date_de_création":2015},
    {"id":7 , "Nom_de_la_technologie":"5G"                   , "Domaine":"Télécommunications"        , "Date_de_création":2019},
    {"id":8 , "Nom_de_la_technologie":"CRISPR"               , "Domaine":"Biotechnologie"            , "Date_de_création":2012},
    {"id":9 , "Nom_de_la_technologie":"Blockchain"           , "Domaine":"Finance / Informatique"    , "Date_de_création":2008},
    {"id":10 , "Nom_de_la_technologie":"Quantum Computing"   , "Domaine":"Informatique  / Physique"  , "Date_de_création":"Années 1980s"}
];

    exports.Ajouter=function ajouterTechnologie(technologie){
        Technologie.push(technologie);
    }

    exports.modifier=function modifierTechnologie(technologie){
        const index = Technologie.findIndex(t => t.id === technologie.id);
        if (index !== -1) {
            Technologie[index] = technologie;
            return Technologie[index]; 
        }
        return "pas de modification"; 
    },

    exports.supprimer=function supprimerTechnologie(id){
        const index = Technologie.findIndex(t => t.id === id);
        if (index !== -1) {
            Technologie.splice(index, 1);
            return 1; 
        }
        return "Ne supprimer pas " ; 
    },

    exports.get=function getTechnologie(id){
        const technologie = Technologie.find(t => t.id === id);
        return technologie ? technologie : -1; 
    };