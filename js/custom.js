let clientName = '';
let clientCountry = '';
let clientAge = '';
let clientHP = '';
let insurance = 0;

function insuranceForm() {
    document.getElementById('calculateButton').addEventListener('click', function(event) {
        event.preventDefault();
        calculateInsurance();
    });
}

function calculateInsurance() {
    clientName = document.getElementById('formName').value;
    clientCountry = document.getElementById('formCountry').value;
    clientAge = parseInt(document.getElementById('formAge').value);
    clientHP = parseInt(document.getElementById('formHP').value);

    if (clientName == '' || clientAge == '' || clientHP == '') {
        document.getElementById('output').innerHTML = '<p>Please enter the information into all input fields</p>';
    } else {
        calculateInsurancePerCountry(clientCountry,clientAge,clientHP);
    }
}

function calculateInsurancePerCountry(clientCountry,clientAge,clientHP) {
    let factor = 0;
    let addition = 0;

    if (clientCountry == 'austria') { factor = 100; addition = 50};
    if (clientCountry == 'hungary') { factor = 120; addition = 100 };
    if (clientCountry == 'greece') { factor = 50; addition = 50; age = age + 3 };

    insurance = clientHP * factor / clientAge + addition;

    document.getElementById('output').innerHTML = '<p>' + clientName + ', your insurance costs ' + insurance.toFixed(2) + '€<br>(The insurance is calculated for ' + clientCountry + '.)</p>';
}

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
                        <p>Comes from <strong>${team.members[i].city}</strong>, and <strong>${team.members[i].hobby}</strong> is the favorite hobby.</p>
                        <button class="detailsbutton" onclick="closeDetails(${team.members[i].id})">Close details</button>
                    </div>
                </div>
            </div>
        `;
        generatedCards += `
            <div class="teamMemberBox" id="card${team.members[i].id}">
                <div class="label">
                    <p><img src="${team.members[i].image}" alt="${team.members[i].name}" onclick="showDetails(${team.members[i].id})"></p>
                    <h4>${team.members[i].name}</h4>
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

function showDetails(id) {
    currentVisible = 'details' + id;
    document.getElementById(currentVisible).classList.toggle('invisible');
}

function closeDetails(id) {
    document.getElementById(currentVisible).classList.add('invisible');
}