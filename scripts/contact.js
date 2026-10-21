const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = contactForm.querySelector(".contact-status");
  // Configure data-whatsapp em pages/about/about.html: país + DDD + número.
  const phone = contactForm.dataset.whatsapp.trim();

  if (!/^\d{8,15}$/.test(phone)) {
    status.textContent = "O contato pelo WhatsApp estará disponível em breve.";
    return;
  }

  const data = new FormData(contactForm);
  const message = [
    `Olá, Aaron! Meu nome é ${data.get("name")}.`,
    `Assunto: ${data.get("subject")}`,
    "",
    data.get("message"),
  ].join("\n");

  status.textContent = "Continue no WhatsApp para enviar a mensagem.";
  window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
});
