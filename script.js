const czBtn = document.getElementById("cz-btn");
const enBtn = document.getElementById("en-btn");

function setLanguage(language) {

    const navLinks = document.querySelectorAll("nav a");

    if (language === "en") {

        // Navigace
        navLinks[0].textContent = "HOME";
        navLinks[1].textContent = "FOOD MENU";
        navLinks[2].textContent = "DRINKS MENU";
        navLinks[3].textContent = "GALLERY";
        navLinks[4].textContent = "CONTACT";

        // Hlavní nadpis
        document.querySelector(".hero h1").textContent =
            "TRADITIONAL CZECH PUB IN TROJA";

        // Text
        const heroParagraphs = document.querySelectorAll(".hero-text p");

        heroParagraphs[0].textContent =
            "Come and visit our newly opened Trojská hospoda.";

        heroParagraphs[1].textContent =
            "We offer well-poured Pilsner beer, homemade lemonades, quality coffee and honest traditional Czech pub food.";

        heroParagraphs[2].textContent =
            "During the summer months, you can enjoy sitting in our garden.";

        // Ikony
        const icons = document.querySelectorAll(".hero-icon span");

        icons[0].textContent = "PILSNER BEER";
        icons[1].textContent = "COFFEE";
        icons[2].textContent = "HOMEMADE LEMONADES";
        icons[3].textContent = "TRADITIONAL CZECH FOOD";
        icons[4].textContent = "OUTDOOR SEATING";

        // Tlačítka
        const buttons = document.querySelectorAll(".hero-buttons a");

        buttons[0].textContent = "FOOD MENU";
        buttons[1].textContent = "DRINKS MENU";

        // Sekce
        document.querySelector("#food h2").textContent =
            "FOOD & DRINKS MENU";

        const menuCards = document.querySelectorAll(".menu-card h3");

        menuCards[0].textContent = "🍽 FOOD MENU";
        menuCards[1].textContent = "🍺 DRINKS MENU";

        const menuLinks = document.querySelectorAll(".menu-card p a");

        menuLinks[0].textContent = "Open full food menu →";
        menuLinks[1].textContent = "Open full drinks menu →";

        document.querySelector("#gallery h2").textContent =
            "GALLERY";

        document.querySelector("#contact h2").textContent =
            "CONTACT";

        localStorage.setItem("language", "en");

    } else {

        // Navigace
        navLinks[0].textContent = "DOMŮ";
        navLinks[1].textContent = "JÍDELNÍ LÍSTEK";
        navLinks[2].textContent = "NÁPOJOVÝ LÍSTEK";
        navLinks[3].textContent = "GALERIE";
        navLinks[4].textContent = "KONTAKT";

        // Hlavní nadpis
        document.querySelector(".hero h1").textContent =
            "KLASICKÁ HOSPODA V TROJI";

        // Text
        const heroParagraphs = document.querySelectorAll(".hero-text p");

        heroParagraphs[0].textContent =
            "Přijďte nás navštívit do nově otevřené Trojské hospody.";

        heroParagraphs[1].textContent =
            "Nabízíme dobře načepované plzeňské pivo, domácí limonády, výběrovou kávu a poctivé hospodské jídlo.";

        heroParagraphs[2].textContent =
            "V letních měsících můžete posedět na naší zahrádce.";

        // Ikony
        const icons = document.querySelectorAll(".hero-icon span");

        icons[0].textContent = "PLZEŇSKÉ PIVO";
        icons[1].textContent = "KÁVA";
        icons[2].textContent = "DOMÁCÍ LIMONÁDY";
        icons[3].textContent = "TRADIČNÍ JÍDLO";
        icons[4].textContent = "VENKOVNÍ POSEZENÍ";

        // Tlačítka
        const buttons = document.querySelectorAll(".hero-buttons a");

        buttons[0].textContent = "JÍDELNÍ LÍSTEK";
        buttons[1].textContent = "NÁPOJOVÝ LÍSTEK";

        // Sekce
        document.querySelector("#food h2").textContent =
            "Jídelní a nápojový lístek";

        const menuCards = document.querySelectorAll(".menu-card h3");

        menuCards[0].textContent = "🍽 Jídelní lístek";
        menuCards[1].textContent = "🍺 Nápojový lístek";

        const menuLinks = document.querySelectorAll(".menu-card p a");

        menuLinks[0].textContent = "Otevřít celý jídelní lístek →";
        menuLinks[1].textContent = "Otevřít celý nápojový lístek →";

        document.querySelector("#gallery h2").textContent =
            "Galerie";

        document.querySelector("#contact h2").textContent =
            "Kontakt";

        localStorage.setItem("language", "cz");
    }
}

czBtn.addEventListener("click", () => setLanguage("cz"));
enBtn.addEventListener("click", () => setLanguage("en"));

const savedLanguage = localStorage.getItem("language");

if (savedLanguage === "en") {
    setLanguage("en");
} else {
    setLanguage("cz");
}
