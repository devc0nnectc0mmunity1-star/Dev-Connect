document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".team-carousel");
  const cards = document.querySelectorAll(".team-card");

  let index = 0;
  const cardWidth = cards[0].offsetWidth + 24; 

  const animations = ["slide-in-left", "fade-in-top", "zoom-in"];

  function autoSlide() {
    cards.forEach(card => {
      card.classList.remove(...animations);
    });

    index++;
    if (index >= cards.length) {
      index = 0; 
    }

    carousel.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });

    const anim = animations[Math.floor(Math.random() * animations.length)];
    cards[index].classList.add(anim);
  }

  setInterval(autoSlide, 3000);
});
