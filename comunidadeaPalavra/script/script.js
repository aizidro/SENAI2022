document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = document.querySelectorAll(".carrosel-container img");
    let currentIndex = 0;
    let intervalId; // Variável para armazenar o ID do intervalo

    function showImage(index) {
        carouselImages.forEach((image, i) => {
            if (i === index) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        showImage(currentIndex);
    }

    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    prevButton.addEventListener("click", () => {
        prevImage();
        clearInterval(intervalId); // Limpa o intervalo ao clicar na seta
        startCarousel(); // Reinicia o carrossel automaticamente
    });

    nextButton.addEventListener("click", () => {
        nextImage();
        clearInterval(intervalId); // Limpa o intervalo ao clicar na seta
        startCarousel(); // Reinicia o carrossel automaticamente
    });

    function startCarousel() {
        intervalId = setInterval(nextImage, 3000); // Inicia o carrossel automaticamente
    }

    startCarousel(); // Inicia o carrossel automaticamente pela primeira vez
    showImage(currentIndex);
});
