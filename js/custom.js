document.getElementById('calculateButton').addEventListener('click', function(event) {
    event.preventDefault();
    calculateInsurance();
});

let clientName = '';
let clientCountry = '';
let clientAge = '';
let clientHP = '';
let insurance = 0;

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