const activities =  [
    {"ciclo": 8, "color": "#00cc1f", "day": 3, "group": "A", "hr_fin": 17, "hr_ini": 14, "letters": "DAM", "name": "Desarrollo De Aplicaciones M\u00f3viles", "prof": "Mera Montenegro", "prof_nom": "Huilder Juanito"}, 
    {"ciclo": 8, "color": "#00cc1f", "day": 4, "group": "B", "hr_fin": 10, "hr_ini": 7, "letters": "DAM", "name": "Desarrollo De Aplicaciones M\u00f3viles", "prof": "Cachay Maco", "prof_nom": "Junior Eugenio"}, 
    {"ciclo": 8, "color": "#00cc1f", "day": 6, "group": "B", "hr_fin": 13, "hr_ini": 10, "letters": "DAM", "name": "Desarrollo De Aplicaciones M\u00f3viles", "prof": "Cachay Maco", "prof_nom": "Junior Eugenio"}, 
    {"ciclo": 8, "color": "#00cc1f", "day": 4, "group": "A", "hr_fin": 17, "hr_ini": 14, "letters": "DAM", "name": "Desarrollo De Aplicaciones M\u00f3viles", "prof": "Mera Montenegro", "prof_nom": "Huilder Juanito"}, 
    {"ciclo": 8, "color": "#ab03ff", "day": 6, "group": "M", "hr_fin": 11, "hr_ini": 8, "letters": "DSI", "name": "Doctrina Social De La Iglesia", "prof": "Ni\u00f1o Effio", "prof_nom": "Alicia Lizet"}, 
    {"ciclo": 8, "color": "#ab03ff", "day": 4, "group": "N", "hr_fin": 13, "hr_ini": 10, "letters": "DSI", "name": "Doctrina Social De La Iglesia", "prof": "Ni\u00f1o Effio", "prof_nom": "Alicia Lizet"}, 
    {"ciclo": 8, "color": "#ab03ff", "day": 5, "group": "D", "hr_fin": 19, "hr_ini": 16, "letters": "DSI", "name": "Doctrina Social De La Iglesia", "prof": "Ni\u00f1o Effio", "prof_nom": "Alicia Lizet"}, 
    {"ciclo": 8, "color": "#ab03ff", "day": 1, "group": "L", "hr_fin": 19, "hr_ini": 16, "letters": "DSI", "name": "Doctrina Social De La Iglesia", "prof": "Ni\u00f1o Effio", "prof_nom": "Alicia Lizet"}, 
    {"ciclo": 8, "color": "#ebd900", "day": 2, "group": "A", "hr_fin": 19, "hr_ini": 14, "letters": "PI", "name": "Proyecto De Investigaci\u00f3n", "prof": "Reyes Burgos", "prof_nom": "Karla Cecilia"}, 
    {"ciclo": 8, "color": "#ebd900", "day": 2, "group": "B", "hr_fin": 19, "hr_ini": 14, "letters": "PI", "name": "Proyecto De Investigaci\u00f3n", "prof": "ARANGURI GARCIA", "prof_nom": "MARIA YSABEL"}, 
    {"ciclo": 8, "color": "#ebd900", "day": 2, "group": "C", "hr_fin": 19, "hr_ini": 14, "letters": "PI", "name": "Proyecto De Investigaci\u00f3n", "prof": "Aquino Trujillo", "prof_nom": "Jury Yesenia"}, 
    {"ciclo": 8, "color": "#f0000C", "day": 1, "group": "B", "hr_fin": 17, "hr_ini": 15, "letters": "CARD", "name": "Configuraci\u00f3n Y Administraci\u00f3n De Redes De Datos", "prof": "Rojas Cerna", "prof_nom": "Miguel Angel"}, 
    {"ciclo": 8, "color": "#f0000C", "day": 3, "group": "A", "hr_fin": 13, "hr_ini": 11, "letters": "CARD", "name": "Configuraci\u00f3n Y Administraci\u00f3n De Redes De Datos", "prof": "Leon Tenorio", "prof_nom": "Gregorio Manuel"}, 
    {"ciclo": 8, "color": "#f0000C", "day": 3, "group": "C", "hr_fin": 17, "hr_ini": 15, "letters": "CARD", "name": "Configuraci\u00f3n Y Administraci\u00f3n De Redes De Datos", "prof": "Rojas Cerna", "prof_nom": "Miguel Angel"}, 
    {"ciclo": 8, "color": "#f0000C", "day": 4, "group": "A", "hr_fin": 13, "hr_ini": 10, "letters": "CARD", "name": "Configuraci\u00f3n Y Administraci\u00f3n De Redes De Datos", "prof": "Leon Tenorio", "prof_nom": "Gregorio Manuel"}, 
    {"ciclo": 8, "color": "#f0000C", "day": 1, "group": "C", "hr_fin": 20, "hr_ini": 17, "letters": "CARD", "name": "Configuraci\u00f3n Y Administraci\u00f3n De Redes De Datos", "prof": "Rojas Cerna", "prof_nom": "Miguel Angel"}, 
    {"ciclo": 8, "color": "#f0000C", "day": 3, "group": "B", "hr_fin": 22, "hr_ini": 19, "letters": "CARD", "name": "Configuraci\u00f3n Y Administraci\u00f3n De Redes De Datos", "prof": "Rojas Cerna", "prof_nom": "Miguel Angel"}, 
    {"ciclo": 8, "color": "#ff6600", "day": 6, "group": "B", "hr_fin": 10, "hr_ini": 7, "letters": "MDBD", "name": "Miner\u00eda De Datos Y Big Data", "prof": "Chavarry Chankay", "prof_nom": "Mariana"}, 
    {"ciclo": 8, "color": "#ff6600", "day": 5, "group": "A", "hr_fin": 15, "hr_ini": 13, "letters": "MDBD", "name": "Miner\u00eda De Datos Y Big Data", "prof": "Chavarry Chankay", "prof_nom": "Mariana"}, 
    {"ciclo": 8, "color": "#ff6600", "day": 5, "group": "B", "hr_fin": 17, "hr_ini": 15, "letters": "MDBD", "name": "Miner\u00eda De Datos Y Big Data", "prof": "Chavarry Chankay", "prof_nom": "Mariana"}, 
    {"ciclo": 8, "color": "#ff6600", "day": 1, "group": "A", "hr_fin": 22, "hr_ini": 19, "letters": "MDBD", "name": "Miner\u00eda De Datos Y Big Data", "prof": "Chavarry Chankay", "prof_nom": "Mariana"} ,
    {"ciclo": 8, "color": "#006AF5", "day": 3, "group": "A", "hr_fin": 19, "hr_ini": 17, "letters": "GGTI", "name": "Gobierno Y Gesti\u00f3n De Tecnolog\u00edas De Informaci\u00f3n", "prof": "Rojas Cerna", "prof_nom": "Miguel Angel"}, 
    {"ciclo": 8, "color": "#006AF5", "day": 5, "group": "A", "hr_fin": 21, "hr_ini": 18, "letters": "GGTI", "name": "Gobierno Y Gesti\u00f3n De Tecnolog\u00edas De Informaci\u00f3n", "prof": "Rojas Cerna", "prof_nom": "Miguel Angel"}, 
] ;

// const activities = [
//     // CICLO 7
//     { name: "DESARROLLO DE SISTEMAS INTELIGENTES", letters: "DSI", day: 6, hr_ini: 11, hr_fin: 13, color: "#c15300", ciclo: 7, group: "A", prof: "Valqui" , estado: false},
//     { name: "DESARROLLO DE SISTEMAS INTELIGENTES", letters: "DSI", day: 6, hr_ini: 14, hr_fin: 16, color: "#c15300", ciclo: 7, group: "A", prof: "Valqui" , estado: false},
    
//     { name: "DESARROLLO DE SISTEMAS INTELIGENTES", letters: "DSI", day: 6, hr_ini: 7, hr_fin: 11, color: "#c15300", ciclo: 7, group: "B", prof: "Valqui" , estado: false},


    
//     { name: "FUNDAMENTOS Y DISEÑO DE REDES DE DATOS", letters: "FDR", day: 2, hr_ini: 9, hr_fin: 11, color: "#a40000", ciclo: 7, group: "A", prof: "Bravo" , estado: false},
//     { name: "FUNDAMENTOS Y DISEÑO DE REDES DE DATOS", letters: "FDR", day: 3, hr_ini: 7, hr_fin: 10, color: "#a40000", ciclo: 7, group: "A", prof: "Bravo" , estado: false},
    
//     { name: "FUNDAMENTOS Y DISEÑO DE REDES DE DATOS", letters: "FDR", day: 2, hr_ini: 7, hr_fin: 9, color: "#a40000", ciclo: 7, group: "B", prof: "Rojas" , estado: false},
//     { name: "FUNDAMENTOS Y DISEÑO DE REDES DE DATOS", letters: "FDR", day: 4, hr_ini: 7, hr_fin: 10, color: "#a40000", ciclo: 7, group: "B", prof: "Rojas" , estado: false},
    
//     { name: "FUNDAMENTOS Y DISEÑO DE REDES DE DATOS", letters: "FDR", day: 1, hr_ini: 19, hr_fin: 22, color: "#a40000", ciclo: 7, group: "C", prof: "Rojas" , estado: false},
//     { name: "FUNDAMENTOS Y DISEÑO DE REDES DE DATOS", letters: "FDR", day: 3, hr_ini: 20, hr_fin: 22, color: "#a40000", ciclo: 7, group: "C", prof: "Rojas" , estado: false},



//     { name: "INGENIERIA Y CALIDAD DE SOFTWARE", letters: "ICS", day: 2, hr_ini: 11, hr_fin: 14, color: "#0067d1", ciclo: 7, group: "A", prof: "Marlon" , estado: false},
//     { name: "INGENIERIA Y CALIDAD DE SOFTWARE", letters: "ICS", day: 4, hr_ini: 7, hr_fin: 10, color: "#0067d1", ciclo: 7, group: "A", prof: "Marlon" , estado: false},
    
//     { name: "INGENIERIA Y CALIDAD DE SOFTWARE", letters: "ICS", day: 2, hr_ini: 10, hr_fin: 13, color: "#0067d1", ciclo: 7, group: "B", prof: "Aranguri" , estado: false},
//     { name: "INGENIERIA Y CALIDAD DE SOFTWARE", letters: "ICS", day: 3, hr_ini: 7, hr_fin: 10, color: "#0067d1", ciclo: 7, group: "B", prof: "Aranguri" , estado: false},

    

//     { name: "INTELIGENCIA DE NEGOCIOS", letters: "IN", day: 4, hr_ini: 10, hr_fin: 13, color: "#3e4f66", ciclo: 7, group: "A", prof: "Zelada" , estado: false},
//     { name: "INTELIGENCIA DE NEGOCIOS", letters: "IN", day: 5, hr_ini: 10, hr_fin: 12, color: "#3e4f66", ciclo: 7, group: "A", prof: "Zelada" , estado: false},
    
//     { name: "INTELIGENCIA DE NEGOCIOS", letters: "IN", day: 5, hr_ini: 10, hr_fin: 13, color: "#3e4f66", ciclo: 7, group: "B", prof: "Zumaran" , estado: false},
//     { name: "INTELIGENCIA DE NEGOCIOS", letters: "IN", day: 6, hr_ini: 11, hr_fin: 13, color: "#3e4f66", ciclo: 7, group: "B", prof: "Zumaran" , estado: false},


    
//     { name: "INVESTIGACION EN INGENIERIA", letters: "IEI", day: 5, hr_ini: 14, hr_fin: 19, color: "#87c100", ciclo: 7, group: "A", prof: "Aranguri" , estado: false},
    
//     { name: "INVESTIGACION EN INGENIERIA", letters: "IEI", day: 4, hr_ini: 14, hr_fin: 19, color: "#87c100", ciclo: 7, group: "B", prof: "Aranguri" , estado: false},



//     { name: "MORAL CATOLICA", letters: "MC", day: 4, hr_ini: 7, hr_fin: 10, color: "#9700dc", ciclo: 7, group: "A", prof: "Niño" , estado: false},
    
//     { name: "MORAL CATOLICA", letters: "MC", day: 6, hr_ini: 8, hr_fin: 11, color: "#9700dc", ciclo: 7, group: "C", prof: "Niño" , estado: false},
    
//     { name: "MORAL CATOLICA", letters: "MC", day: 1, hr_ini: 16, hr_fin: 19, color: "#9700dc", ciclo: 7, group: "G", prof: "Niño" , estado: false},



//     { name: "SISTEMAS DISTRIBUIDOS", letters: "SD", day: 1, hr_ini: 10, hr_fin: 13, color: "#00b66a", ciclo: 7, group: "A", prof: "Consuelo" , estado: false},
//     { name: "SISTEMAS DISTRIBUIDOS", letters: "SD", day: 3, hr_ini: 12, hr_fin: 14, color: "#00b66a", ciclo: 7, group: "A", prof: "Consuelo" , estado: false},

//     { name: "SISTEMAS DISTRIBUIDOS", letters: "SD", day: 4, hr_ini: 10, hr_fin: 12, color: "#00b66a", ciclo: 7, group: "B", prof: "Zumaran" , estado: false},
//     { name: "SISTEMAS DISTRIBUIDOS", letters: "SD", day: 5, hr_ini: 7, hr_fin: 10, color: "#00b66a", ciclo: 7, group: "B", prof: "Zumaran" , estado: false},



// // CICLO 6


// ];
