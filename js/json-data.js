/*
 ┌──────────────────────────────────────────────────────────────────────────────────┐
 │   __  __            _         ____        _       _                              │
 │  |  \/  |          (_)       |  _ \      | |     | |                             │
 │  | \  / | __ _ _ __ _ _ __   | |_) | __ _| | __ _| |__   __ _ _ __   _____   __  │
 │  | |\/| |/ _` | '__| | '_ \  |  _ < / _` | |/ _` | '_ \ / _` | '_ \ / _ \ \ / /  │
 │  | |  | | (_| | |  | | | | | | |_) | (_| | | (_| | |_) | (_| | | | | (_) \ V /   │
 │  |_|  |_|\__,_|_|  |_|_| |_| |____/ \__,_|_|\__,_|_.__/ \__,_|_| |_|\___/ \_/    │
 │                                                                                  │
 │          _____          _        _____            _                 ____         │
 │         / ____|        | |      |  __ \          (_)               |___ \        │
 │        | |     ___   __| | ___  | |__) |_____   ___  _____      __   __) |       │
 │        | |    / _ \ / _` |/ _ \ |  _  // _ \ \ / / |/ _ \ \ /\ / /  |__ <        │
 │        | |___| (_) | (_| |  __/ | | \ \  __/\ V /| |  __/\ V  V /   ___) |       │
 │         \_____\___/ \__,_|\___| |_|  \_\___| \_/ |_|\___| \_/\_/   |____/        │
 │                                                                                  │
 │                                 _  _____  ____  _   _                            │
 │                                | |/ ____|/ __ \| \ | |                           │
 │                                | | (___ | |  | |  \| |                           │
 │                            _   | |\___ \| |  | | . ` |                           │
 │                           | |__| |____) | |__| | |\  |                           │
 │                            \____/|_____/ \____/|_| \_|                           │
 │                                                                                  │
 │ Welcome to /js/json-data.js, this file contains faked data for the people list   │
 │ as JSON data. This is needed for the team member list at team.html.              │
 │                                                                                  │
 │ The random German names are generated on https://realnamecreator.alexjonas.de,   │
 │ the job titles are generated from https://www.bullshitjob.com/title/, the list   │
 │ of cities in Austria is from https://de.wikipedia.org/wiki/Liste_der_Städte      │
 │ _in_Österreich and the image paths lead to images downloaded from                │
 │ https://unsplash.com                                                             │
 └──────────────────────────────────────────────────────────────────────────────────┘
*/

var team = JSON.parse(`{
    "members": [
       {
         "id": "1",
         "name": "Eleonore Lautenschläger",
         "job_title": "Investor Optimization Administrator",
         "email": "eleonore.lautenschlaeger@mail.com",
         "hobby": "dancing",
         "city": "Wien",
         "image": "img/team/person01.jpg"
       },
       {
         "id": "2",
         "name": "Laura Tegelmann",
         "job_title": "Customer Program Designer",
         "city": "Graz",
         "email": "laura.tegelmann@mail.com",
         "hobby": "reading",
         "image": "img/team/person02.jpg"
       },
       {
         "id": "3",
         "name": "Rebecca Hart",
         "job_title": "Senior Implementation Associate",
         "email": "rebecca.hart@mail.com",
         "hobby": "painting",
         "city": "Linz",
         "image": "img/team/person03.jpg"
       },
       {
         "id": "4",
         "name": "Jasper Merz",
         "job_title": "Central Accountability Engineer",
         "email": "jasper.merz@mail.com",
         "hobby": "hiking",
         "city": "Salzburg",
         "image": "img/team/person04.jpg"
       },
       {
         "id": "5",
         "name": "Kira Lohse",
         "job_title": "Global Usability Executive",
         "email": "kira.lohse@mail.com",
         "hobby": "skating",
         "city": "Innsbruck",
         "image": "img/team/person05.jpg"
       },
       {
         "id": "6",
         "name": "Rene Störmer",
         "job_title": "Product Factors Associate",
         "email": "Rene.stoermer@mail.com",
         "hobby": "soccer",
         "city": "Klagenfurt",
         "image": "img/team/person06.jpg"
       },
       {
         "id": "7",
         "name": "Juliane Brosig",
         "job_title": "Principal Solutions Architect",
         "email": "juliane.brosig@mail.com",
         "hobby": "dancing",
         "city": "Wels",
         "image": "img/team/person07.jpg"
       },
       {
         "id": "8",
         "name": "Max Lüdke",
         "job_title": "Dynamic Tactics Supervisor",
         "email": "max.lüdke@mail.com",
         "hobby": "reading",
         "city": "Sankt Pölten",
         "image": "img/team/person08.jpg"
       },
       {
         "id": "9",
         "name": "Jochen Velten",
         "job_title": "Senior Team Associate",
         "email": "jochen.velten@mail.com",
         "hobby": "painting",
         "city": "Dornbirn",
         "image": "img/team/person09.jpg"
       },
       {
         "id": "10",
         "name": "Melissa Tauch",
         "job_title": "Direct Web Consultant",
         "email": "melissa.tauch@mail.com",
         "hobby": "hiking",
         "city": "Wiener Neustadt",
         "image": "img/team/person10.jpg"
       },
       {
         "id": "11",
         "name": "Janna Baron",
         "job_title": "Internal Operations Orchestrator",
         "email": "janna.baron@mail.com",
         "hobby": "combat sport",
         "city": "Steyr",
         "image": "img/team/person11.jpg"
       },
       {
         "id": "12",
         "name": "Heidi Glanz",
         "job_title": "Senior Marketing Consultant",
         "email": "heidi.glanz@mail.com",
         "hobby": "juggling",
         "city": "Feldkirch",
         "image": "img/team/person12.jpg"
       },
       {
         "id": "13",
         "name": "Hanna Zenner",
         "job_title": "Global Configuration Manager",
         "email": "hanna.zenner@mail.com",
         "hobby": "trampoline jumping",
         "city": "Bregenz",
         "image": "img/team/person13.jpg"
       },
       {
         "id": "14",
         "name": "Annelie Heiß",
         "job_title": "Investor Response Liason",
         "email": "annelie.heiss@mail.com",
         "hobby": "golf",
         "city": "Leonding",
         "image": "img/team/person14.jpg"
       },
       {
         "id": "15",
         "name": "Corinna Funke",
         "job_title": "Customer Optimization Assistant",
         "email": "corinna.funke@mail.com",
         "hobby": "table tennis",
         "city": "Klosterneuburg",
         "image": "img/team/person15.jpg"
       },
       {
         "id": "16",
         "name": "Bodo Bleibtreu",
         "job_title": "Interactive Metrics Coordinator",
         "email": "bodo.bleibtreu@mail.com",
         "hobby": "running",
         "city": "Baden",
         "image": "img/team/person16.jpg"
       },
       {
         "id": "17",
         "name": "Kai Opel",
         "job_title": "Internal Resonance Specialist",
         "email": "kai.opel@mail.com",
         "hobby": "traveling",
         "city": "Wolfsberg",
         "image": "img/team/person17.jpg"
       },
       {
         "id": "18",
         "name": "Peter Brand",
         "job_title": "Corporate Research Strategist",
         "email": "peter.brand@mail.com",
         "hobby": "table tennis",
         "city": "Krems an der Donau",
         "image": "img/team/person18.jpg"
       }
    ]
 }`)