const joinBtnHeader = document.getElementById("joinBtn");
const joinBtnHero = document.querySelector(".btn-light");
const joinBtnAbout = document.querySelector(".btn-about");
const joinBtnPrimary = document.querySelector(".btn-primary");
const modal = document.getElementById("joinCommunityModal");

function openModal() {
  fetch("join-community.html")
    .then((res) => res.text())
    .then((html) => {
      modal.innerHTML = html;
      modal.style.display = "block";

      attachFormHandler();
    })
    .catch((err) => console.error("Error loading form:", err));
}

[joinBtnHeader, joinBtnHero].forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  }
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

function attachFormHandler() {
  const signupWrapper = document.getElementById("signupFormWrapper");
  const signinWrapper = document.getElementById("signinFormWrapper");
  const resetBtn = document.getElementById("reset-password-btn");

  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  const showSignin = document.getElementById("showSignin");
  const showSignup = document.getElementById("showSignup");

  if (showSignin) {
    showSignin.addEventListener("click", (e) => {
      e.preventDefault();
      signupWrapper.style.display = "none";
      signinWrapper.style.display = "block";
    });
  }

  if (showSignup) {
    showSignup.addEventListener("click", (e) => {
      e.preventDefault();
      signinWrapper.style.display = "none";
      signupWrapper.style.display = "block";
    });
  }

  const backBtn = document.getElementById("backToSignup");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      signinWrapper.style.display = "none";
      signupWrapper.style.display = "block";
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener(
      "click",
      () => (window.location.href = "password-recovery.html"),
    );
  }

  const joinForm = document.getElementById("joinForm");
  if (joinForm) {
    joinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const reason = document.getElementById("reason").value.trim();
      const reasonOption = document.getElementById("reasonOption").value;
      const finalReason = reason || reasonOption;
      alert(
        `Thanks ${fullname}! Check your email (${email}) for our WhatsApp link.\nReason: ${finalReason}`,
      );
    });
  }

  const signinForm = document.getElementById("signinForm");
  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signinEmail").value.trim();
      const password = document.getElementById("signinPassword").value.trim();
      alert(`Welcome back! Signed in with ${email}`);
    });
  }
}
