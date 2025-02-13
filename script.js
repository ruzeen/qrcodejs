const urlText = document.getElementById('url-text');

const qrcode = new QRCode(document.getElementById('qrcode'));

const makeCode = () => {
	if (!urlText.value) {
		urlText.placeholder = 'Enter a URL';
	}

	qrcode.makeCode(urlText.value);
}

makeCode();

// Add event listener for the "blur" event
urlText.addEventListener('blur', () => {
    makeCode();
});

// Add event listener for the "keydown" event
urlText.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {  // Check if the Enter key was pressed
        makeCode();
    }
});