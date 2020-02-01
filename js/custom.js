/*
┌────────────────────────────────────────────────────────────────────────────────┐
│  __  __            _         ____        _       _                             │
│ |  \/  |          (_)       |  _ \      | |     | |                            │
│ | \  / | __ _ _ __ _ _ __   | |_) | __ _| | __ _| |__   __ _ _ __   _____   __ │
│ | |\/| |/ _` | '__| | '_ \  |  _ < / _` | |/ _` | '_ \ / _` | '_ \ / _ \ \ / / │
│ | |  | | (_| | |  | | | | | | |_) | (_| | | (_| | |_) | (_| | | | | (_) \ V /  │
│ |_|  |_|\__,_|_|  |_|_| |_| |____/ \__,_|_|\__,_|_.__/ \__,_|_| |_|\___/ \_/   │
│                                                                                │
│         _____          _        _____            _                 ____        │
│        / ____|        | |      |  __ \          (_)               |___ \       │
│       | |     ___   __| | ___  | |__) |_____   ___  _____      __   __) |      │
│       | |    / _ \ / _` |/ _ \ |  _  // _ \ \ / / |/ _ \ \ /\ / /  |__ <       │
│       | |___| (_) | (_| |  __/ | | \ \  __/\ V /| |  __/\ V  V /   ___) |      │
│        \_____\___/ \__,_|\___| |_|  \_\___| \_/ |_|\___| \_/\_/   |____/       │
│                                                                                │
│                                       _  _____                                 │
│                                      | |/ ____|                                │
│                                      | | (___                                  │
│                                  _   | |\___ \                                 │
│                                 | |__| |____) |                                │
│                                  \____/|_____/                                 │
│                                                                                │
│   Welcome to /js/custom.js: This is the main Javascript file with the          │
│   functions for index.html and team.html, including the insurance              │
│   calculator and the recursive member card generator for the team list.        │
└────────────────────────────────────────────────────────────────────────────────┘
*/

// Initializing the necessary variables for the insurance calculator on index.html.
let clientName = '';
let clientCountry = '';
let clientAge = '';
let clientHP = '';
let insurance = 0;

/* This function is only used on index.html. It add the event listener to the "Calculate"
   button and calls the function to get the user inputs in the insurance form */
function insuranceForm() {
    document.getElementById('calculateButton').addEventListener('click', function(event) {
        event.preventDefault();
        getInsuranceForm();
    });
}

/* This function checks the form inputs for validity and then sends the entered parameters
   to the function that actually calculates the insurance payments. */
function getInsuranceForm() {
    clientName = document.getElementById('formName').value;
    clientCountry = document.getElementById('formCountry').value;
    clientAge = parseInt(document.getElementById('formAge').value);
    clientHP = parseInt(document.getElementById('formHP').value);

    if (clientName == '' || clientAge == '' || clientHP == '') {
        document.getElementById('output').innerHTML = '<p>Please complete all input fields</p>';
    } else {
        calculateInsurancePerCountry(clientCountry,clientAge,clientHP);
    }
}

/* This is the universal function to calculate the insurance payments. It needs the inputs
   to change the multiplication factors and the numbers to be added depending on which
   country has been selected.
   After declaring the local variables necessary, the function starts out with three conditional
   if statements to set all factors of the insurance calculator to match the user's country. Then
   it runs the calculation and displays it in a prepared div. */
function calculateInsurancePerCountry(clientCountry,clientAge,clientHP) {
    let factor = 0;
    let addition = 0;

    if (clientCountry == 'austria') { factor = 100; addition = 50};
    if (clientCountry == 'hungary') { factor = 120; addition = 100 };
    if (clientCountry == 'greece') { factor = 50; addition = 50; clientAge = clientAge + 3 };

    insurance = clientHP * factor / clientAge + addition;

    document.getElementById('output').innerHTML = '<p>Hey ' + clientName + ', your insurance costs ' + insurance.toFixed(2) + '€<br>(Insurance calculated for <span class="countryName">' + clientCountry + '</span>.)</p>';
}

/* This is the main function of the team.html page. The JSON file with the personal data is taken,
   iterated through and the necessary infos are placed into a literal string with the HTML necessary to
   generate the small cards with the team members' infos. After every three small cards, the loop
   adds three hidden large cards. These large cards are not visible, but they need to be in the area
   above their small counterparts.*/
function generateTeam() {
    let generatedDetails = '';
    let generatedCards = '';
    let generatedTeam = '';
    let counter = 0;
    let currentVisible = '';

    for (let i in team.members) {
        generatedDetails += `
            <div class="teamMemberDetails invisible" id="details${team.members[i].id}">
                <div class="teamMemberFlex">
                    <div class="imageBox">
                        <p><img src="${team.members[i].image}" alt="${team.members[i].name}"></p>
                    </div>
                    <div class="desciptionBox">
                        <h3>${team.members[i].name}</h3>
                        <h4>${team.members[i].job_title}</h4>
                        <p>Contact: <a href="mailto:${team.members[i].email}">${team.members[i].email}</a></p>
                        <p>Comes from <strong>${team.members[i].city}</strong>, and <strong>${team.members[i].hobby}</strong> is their favorite hobby.</p>
                        <button class="detailsbutton" onclick="closeDetails(${team.members[i].id})">Close details</button>
                    </div>
                </div>
            </div>
        `;
        generatedCards += `
            <div class="teamMemberBox" id="card${team.members[i].id}">
                <div class="nameTag">
                    <img src="${team.members[i].image}" alt="${team.members[i].name}" onclick="showDetails(${team.members[i].id})">
                    <div class="label">${team.members[i].name}</div>
                </div>
                <button class="detailsbutton" onclick="showDetails(${team.members[i].id})">Show Details</button>
            </div>
        `;
        counter++;
        if (counter === 3) {
            generatedTeam += generatedDetails;
            generatedTeam += generatedCards;
            generatedDetails = '';
            generatedCards = '';
            counter = 0;
        }
    };
    document.getElementById('teamlist').innerHTML = generatedTeam;
}

/* Here is where things get a bit tricky. I did not want the user to have to close all
   large cards indiviidually, but rather wanted any open large cards to close, when a
   user clicks on a different small card to see someone else's details. For this purpose,
   any time a user clicks on "Show details", the function checks if there are any large
   cards open already and closes them before opening the new large card.
   */
function showDetails(toggle_id) {

    let allVisibles = document.getElementsByClassName('nothidden');
    if (allVisibles.length > 0) {
        document.getElementById(allVisibles[0].id).classList.toggle('invisible');
        document.getElementById(allVisibles[0].id).classList.remove('nothidden');
    }

    document.getElementById('details' + toggle_id).classList.toggle('invisible');
    document.getElementById('details' + toggle_id).classList.add('nothidden');

    location.href = '#details' + toggle_id;
}

/* This is simply the close function for the "Close" button in the large cards. */
function closeDetails(toggle_id) {
    document.getElementById('details' + toggle_id).classList.toggle('invisible');
    document.getElementById('details' + toggle_id).classList.remove('nothidden');
}