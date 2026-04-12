document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href && !href.startsWith("http") && !href.startsWith("#")) {
        if (href === "our-course.html") {
          const token = localStorage.getItem("jwtToken");
          if (!token) {
            e.preventDefault();
            alert("You must sign in to access OurCourse.");
            if (typeof openModal === "function") {
              openModal();
            }
            return;
          }
        }

        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 800); 
      }
    });
  });
});
