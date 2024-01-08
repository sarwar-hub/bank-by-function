// Functions



// Get value from input field by id
function getInputValue(inputId) {
    let element = document.getElementById(inputId);
    let stringValue = element.value;
    let value = parseFloat(stringValue);
    element.value = '';
    return value;
}

// Get value from element text by id
function getTextValue(textId) {
    let element = document.getElementById(textId);
    let stringValue = element.innerText;
    let value = parseFloat(stringValue);
    return value;
}

// Set value to container by id
function setValue(elementId, value) {
    let element = document.getElementById(elementId);
    element.innerText = value;
}