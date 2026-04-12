document.getElementById("recovery-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const button = e.target.querySelector("button[type='submit']");
  button.disabled = true;
  button.textContent = "Loading...";
  button.classList.add("loading"); 


  const payload = {
    email: document.getElementById("email").value,
    newPassword: document.getElementById("newPassword").value,
    confirmPassword: document.getElementById("confirmPassword").value
  };

  try {
  const response = await fetch("https://devc0nnect-back3nd-production.up.railway.app/forgot-password/reset-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });



    const result = await response.json();

    if (response.ok) {
  const msgBox = document.createElement("div");
  msgBox.textContent = result.msg + " Redirecting to Sign In...";
  msgBox.className = "success-message";
  document.querySelector(".recovery-container").appendChild(msgBox);


        setTimeout(() => {
    msgBox.classList.add("show");
  }, 50);

      setTimeout(() => {
        window.location.href = "index.html#signin";
      }, 3000); 
    } else {
      alert(result.msg);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    button.disabled = false;
    button.textContent = "Reset Password";
    button.classList.remove("loading");
  }
});

function togglePassword(inputId, eyeIcon) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.textContent = "🙈";
  } else {
    input.type = "password";
    eyeIcon.textContent = "👁️"; 
  }
}