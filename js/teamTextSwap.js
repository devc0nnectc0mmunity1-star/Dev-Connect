document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("team-heading");
  const paragraph = document.getElementById("team-paragraph");

  const messages = [
    {
      h1: "Leaders Who Inspire Growth",
      p: "Our team is made up of visionaries guiding developers toward success."
    },
    {
      h1: "Strength in Collaboration",
      p: "Every achievement here is powered by teamwork and shared passion."
    },
    {
      h1: "Faces Behind the Code",
      p: "Meet the brilliant minds turning ideas into impactful projects."
    },
    {
      h1: "Driven by Purpose",
      p: "We are more than a community — we are a family building the future together."
    },
    {
      h1: "Your Guides, Your Partners",
      p: "From finance to design, our team is here to support your journey."
    }
  ];

  const animations = ["slide-left", "slide-right", "slide-up", "slide-down"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % messages.length;
    const anim = animations[index % animations.length];

    // reset classes
    heading.className = "";
    paragraph.className = "hero-paragraph";

    // add animation
    heading.classList.add(anim);
    paragraph.classList.add(anim);

    // swap text
    heading.textContent = messages[index].h1;
    paragraph.textContent = messages[index].p;
  }, 4000);
});
