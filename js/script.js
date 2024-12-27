const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");
const qrAlert = document.querySelector("#qr-alert");

// Eventos
function gerarQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) {
        qrAlert.textContent = "Por favor, insira um texto ou URL antes de gerar o QR Code.";
        qrAlert.style.display = "block"; 
        return; 
    }

    qrAlert.style.display = "none";

    qrCodeBtn.innerText = "Gerando QR Code...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("ativo");
        qrCodeBtn.innerText = "QR Code gerado";
    });
}

qrCodeBtn.addEventListener("click", () => {
    gerarQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        gerarQrCode();
    }
});

// Limpar site 
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("ativo");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})