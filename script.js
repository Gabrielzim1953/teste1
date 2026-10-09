const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".header-nav");

    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
      });
    });

    const testimonials = [
      { quote: "Fizeram melhor do que eu esperava. Atenção aos detalhes incrível!", name: "— Cliente" },
      { quote: "Conseguiu transformar minha ideia em uma arte ainda mais bonita do que eu imaginava.", name: "— Cliente" },
      { quote: "Ambiente tranquilo, muito cuidado e um resultado que vou levar com orgulho.", name: "— Cliente" }
    ];
    let currentTestimonial = 0;

    function showTestimonial(offset) {
      currentTestimonial = (currentTestimonial + offset + testimonials.length) % testimonials.length;
      document.querySelector("#quote-text").textContent = testimonials[currentTestimonial].quote;
      document.querySelector("#quote-name").textContent = testimonials[currentTestimonial].name;
      document.querySelector("#quote-count").textContent =
        `${String(currentTestimonial + 1).padStart(2, "0")} / ${String(testimonials.length).padStart(2, "0")}`;
    }

    document.querySelector("#quote-prev").addEventListener("click", () => showTestimonial(-1));
    document.querySelector("#quote-next").addEventListener("click", () => showTestimonial(1));
    document.querySelector("#year").textContent = new Date().getFullYear();
