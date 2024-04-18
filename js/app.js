function validateForm() {
    const postalCodeInput = document.getElementById("postalCode");
    const postalCodeError = document.getElementById("postalCode-error");
    const hourlyRateInput = document.getElementById("hourlyRate");
    const hourlyRateError = document.getElementById("hourlyRate-error");

    if (!isValidPostalCode(postalCodeInput.value)) {
        postalCodeError.textContent = "Please enter a valid Canadian postal code.";
        postalCodeError.style.display = "block";
        return false;
    } else {
        postalCodeError.style.display = "none";
    }


    const hiringRadio = document.getElementById("hourlyRateDiv");
    if (hiringRadio.checked) {
        if (hourlyRateInput.value.trim() === "") {
            hourlyRateError.textContent = "Please enter the hourly rate.";
            hourlyRateError.style.display = "block";
            return false; 
        } else {
            hourlyRateError.style.display = "none";
        }
    }
    return true;
}

function isValidPostalCode(postalCode) {
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    return postalCodeRegex.test(postalCode);
}

document.getElementById("contact-form").addEventListener("change", function() {
    const hourlyRateDiv = document.getElementById("hourlyRateDiv");
    const hiringRadio = document.getElementById("hiring");
    if (hiringRadio.checked) {
        hourlyRateDiv.style.display = "block";
    } else {
        hourlyRateDiv.style.display = "none";
    }
});
