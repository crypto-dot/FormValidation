(function validateInputs() {
    const emailInput = document.getElementById('email');
    const zipcodeInput = document.getElementById('zipcode');
    const countryInput = document.getElementById('country');
    const passwordInput = document.getElementById('password');
    const form = document.querySelector('form');

    emailInput.addEventListener('input', validateEmail.bind(emailInput));
    countryInput.addEventListener('input', validateCountry.bind(countryInput));
    zipcodeInput.addEventListener('input', validateZipcode.bind(zipcodeInput));
    passwordInput.addEventListener('input', validatePassword.bind(passwordInput));
    form.addEventListener('submit', (e) => {
        if (!emailInput.validity.valid || !zipcodeInput.validity.valid || !countryInput.validity.valid || !passwordInput.validity.valid || emailInput.value.length < 3 || passwordInput.value.length < 12 || zipcodeInput.value.length < 5 || countryInput.length < 3) {
            e.preventDefault();
        }
    })
})();
function validateEmail() {
    const emailError = document.getElementById('emailError');

    if (this.validity.valid && this.value !== '') {
        placeCheckMarkInlineSVG('emailErrorIcon');
        emailError.textContent = 'Email Looks Good!';
        emailError.style.color = '#4AE941';
    }
    else {
        placeXMarkInlineSVG('emailErrorIcon');
        emailErrorMessage.call(this);
    }
}
function validateCountry() {
    const countryError = document.getElementById('countryError');
    if (this.validity.valid && this.value !== '') {
        placeCheckMarkInlineSVG('countryErrorIcon');
        countryError.textContent = 'Country Looks Good!';
        countryError.style.color = '#4AE941'
    }
    else {
        placeXMarkInlineSVG('countryErrorIcon');
        countryErrorMessage.call(this);
    }

}
function validateZipcode() {
    const zipcodeError = document.getElementById('zipcodeError');
    if (this.validity.valid && this.value !== '') {
        placeCheckMarkInlineSVG('zipcodeErrorIcon');
        zipcodeError.textContent = 'Zipcode Looks Good!'
        zipcodeError.style.color = '#4AE941';
    }
    else {
        placeXMarkInlineSVG('zipcodeErrorIcon');
        zipcodeErrorMessage.call(this);
    }
}
function validatePassword() {
    const invalidNumberLength = document.getElementById('invalidNumberLength');
    const invalidUpperCharLength = document.getElementById('invalidUpperCharLength');
    const invalidCharLength = document.getElementById('invalidCharLength');
    const invalidSpecialCharLength = document.getElementById('invalidSpecialCharLength');
    const password = document.getElementById('password').value;

    if (!(/\d/).test(password)) {
        placeXMarkInlineSVG('invalidNumLengthErrorIcon');
        invalidNumberLength.textContent = 'Please enter at least 1 digit';
        invalidNumberLength.style.color = '#FF1616';
    } else {
        placeCheckMarkInlineSVG('invalidNumLengthErrorIcon');
        invalidNumberLength.textContent = 'You have 1 digit!'
        invalidNumberLength.style.color = '#4AE941';
    }
    if (!(/[A-Z]/).test(password)) {
        placeXMarkInlineSVG('invalidUpperCharErrorIcon');
        invalidUpperCharLength.textContent = 'Please enter at least 1 uppercase letter';
        invalidUpperCharLength.style.color = '#FF1616';
    } else {
        placeCheckMarkInlineSVG('invalidUpperCharErrorIcon');
        invalidUpperCharLength.textContent = 'You have 1 uppercase letter!'
        invalidUpperCharLength.style.color = '#4AE941';
    }
    if (!(/(\W|_)/).test(password)) {
        placeXMarkInlineSVG('specialCharErrorIcon');
        invalidSpecialCharLength.textContent = 'Please enter at least 1 special character (eg. , $ ! &)';
        invalidSpecialCharLength.style.color = '#FF1616';
    } else {
        placeCheckMarkInlineSVG('specialCharErrorIcon');
        invalidSpecialCharLength.textContent = 'You have 1 special character!';
        invalidSpecialCharLength.style.color = '#4AE941';
    }
    if (this.validity.tooShort || this.value == '') {
        placeXMarkInlineSVG('charLengthErrorIcon');
        invalidCharLength.textContent = 'Password must be at least 12 characters long';
        invalidCharLength.style.color = '#FF1616';
    } else {
        placeCheckMarkInlineSVG('charLengthErrorIcon');
        invalidCharLength.textContent = 'Password is the right length!';
        invalidCharLength.style.color = '#4AE941';
    }
    if ((/\d/).test(password) && (/[A-Z]/).test(password) && (/(\W|_)/).test(password) && !(this.validity.tooShort || this.value === '')) {
        this.setCustomValidity('');
    }
}
function emailErrorMessage() {
    const emailError = document.getElementById('emailError');
    emailError.style.color = '#FF1616';

    if (this.value === '' || this.validity.tooShort) {
        emailError.textContent = 'Email must be at least 3 chars long';
    } else if (this.validity.patternMismatch || this.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email';
    }
}

function countryErrorMessage() {
    const countryError = document.getElementById('countryError');
    countryError.style.color = '#FF1616';
    if (this.value === '' || this.validity.tooShort) {
        countryError.textContent = 'Country must be at least 4 chars long';
    } else if (this.validity.patternMismatch) {
        countryError.textContent = 'Please enter a valid country';
    } else if (this.validity.tooLong) {
        countryError.textContent = 'Country must be less than 56 chars long';
    }
}
function zipcodeErrorMessage() {
    const zipcodeError = document.getElementById('zipcodeError');
    zipcodeError.style.color = '#FF1616';
    if (this.value === '' || this.validity.tooShort) {
        zipcodeError.textContent = 'Zipcode must be at least 5 chars long';
    } else if (this.validity.patternMismatch) {
        zipcodeError.textContent = 'Please Enter a Valid US Zipcode';
    }
}
function placeCheckMarkInlineSVG(nodeID) {
    const errorIcon = document.getElementById(nodeID);
    errorIcon.innerHTML = '';
    errorIcon.innerHTML = `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1.2rem" height="1.2rem" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#6BBE66" d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"/></g></svg>`;
}
function placeXMarkInlineSVG(nodeID) {
    const errorIcon = document.getElementById(nodeID);
    errorIcon.innerHTML = '';
    errorIcon.innerHTML += `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1.2rem" height="1.2rem" viewBox="0 0 122.879 122.879" enable-background="new 0 0 122.879 122.879" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#FF4141" d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"/></g></svg>`;
}