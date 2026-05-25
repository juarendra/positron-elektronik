const languageButton = document.querySelector(".lang-toggle");
const translatable = document.querySelectorAll("[data-en][data-id]");
const whatsappLinks = document.querySelectorAll(".whatsapp-link");

const whatsappMessages = {
  en: "Hi POSITRON ELEKTRONIK,\nI want to discuss an IoT monitoring demo.\n\nProblem:\nLocation:\nSensor points:\nPhotos available:",
  id: "Halo POSITRON ELEKTRONIK,\nSaya ingin konsultasi demo monitoring IoT.\n\nMasalah:\nLokasi:\nJumlah titik sensor:\nFoto lokasi tersedia:",
};

function setLanguage(language) {
  document.documentElement.lang = language;
  document.body.classList.toggle("lang-id", language === "id");
  document.body.classList.toggle("lang-en", language === "en");
  translatable.forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageButton.textContent = language === "en" ? "ID" : "EN";
  languageButton.setAttribute(
    "aria-label",
    language === "en" ? "Switch to Indonesian" : "Switch to English",
  );
  whatsappLinks.forEach((link) => {
    link.href = `https://wa.me/6285883802041?text=${encodeURIComponent(whatsappMessages[language])}`;
  });
  localStorage.setItem("positron-language", language);
}

languageButton.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "en" ? "id" : "en";
  setLanguage(nextLanguage);
});

setLanguage(localStorage.getItem("positron-language") || "en");
