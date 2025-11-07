const urlText = document.getElementById("url-text");

const qrcode = new QRCode(document.getElementById("qrcode"));

const makeCode = () => {
  if (!urlText.value) {
    urlText.placeholder = "Enter a URL";
  }

  qrcode.makeCode(urlText.value);
};

makeCode();

// Add event listener for the "blur" event
urlText.addEventListener("blur", () => {
  makeCode();
});

// Add event listener for the "keydown" event
urlText.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // Check if the Enter key was pressed
    makeCode();
  }
});

const downloadBtn = document.getElementById("download-btn");

// Save QR code
downloadBtn.addEventListener("click", () => {
  const img = document.querySelector("#qrcode img");
  const a = document.createElement("a");
  a.href = img.src;
  a.download = "qrcode.png";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// test 12:00
