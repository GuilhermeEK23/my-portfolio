document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "") {
      alert("Por favor, preencha pelo menos nome e email.");
      return;
    }

    let phone = "5569992241605";

    let whatsappMessage = `Olá! Meu nome é ${name}.\nE-mail: ${email}\nMensagem: ${message}`;

    let whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  });
