

let input = document.querySelector("#input");
let buttonGenerate = document.querySelector("#generate");
let imgQr = document.querySelector("#imgqr");

function generate() {
    if (input.value.trim() === '') {
        alert("Please enter valid input");
        return;
    }

    const qrData = encodeURIComponent(input.value);
    imgQr.setAttribute('src', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrData);
    imgQr.style.display = "block"; // show the image
}

buttonGenerate.addEventListener('click', generate);
