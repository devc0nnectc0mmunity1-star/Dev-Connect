function toggleAskBox(button) {
  const askBox = button.closest('.ask-box');
  askBox.classList.toggle('expanded');
  askBox.classList.toggle('collapsed');
}

function toggleAnswerBox(button) {
  const answerBox = button.closest('.answer-section').querySelector('.answer-box');
  answerBox.classList.toggle('expanded');
  answerBox.classList.toggle('collapsed');
}

function toggleReply(button) {
  const replyBox = button.closest('.answer').querySelector('.reply-box');
  if (replyBox) {
    replyBox.classList.toggle('open');
  }
}

/* ------------------ DESKTOP ------------------ */
function showQuestionDesktop(element) {
  const title = element.querySelector('.question-title')?.innerText || '';
  const snippet = element.querySelector('.question-snippet')?.innerText || '';
  const meta = element.querySelector('.meta')?.innerText || '';
  const imageSrc = element.querySelector('img')?.getAttribute('src') || '';
  const imageAlt = element.querySelector('img')?.getAttribute('alt') || '';

  // Fill placeholders
  document.getElementById('answer-title').innerText = title;
  document.getElementById('answer-text').innerText = snippet;
  document.getElementById('answer-meta').innerText = meta;

  const answerImages = document.getElementById('answer-images');
  answerImages.innerHTML = '';
  if (imageSrc) {
    const clone = document.createElement('img');
    clone.src = imageSrc;
    clone.alt = imageAlt;
    clone.className = 'uploaded-img';
    answerImages.appendChild(clone);
  }

  // Inject answers
  const answersContainer = document.getElementById('answers-container-desktop');
  answersContainer.innerHTML = '';

  const answers = [
    { name: "Clara Ugwu", helpful: 7, text: "This is a placeholder answer.", avatar: "images/team-image/Kajinake.png" },
    { name: "Bryan Okafor", helpful: 25, text: "Check your controller mappings and debug the stack trace carefully.", avatar: "images/team-image/Bryan.png" },
    { name: "Ada Ebube", helpful: 7, text: "Try enabling debug logs in Spring Boot to trace the NullPointerException.", avatar: "images/team-image/Ada.png" }
  ];

  answers.forEach(ans => {
    answersContainer.innerHTML += `
      <div class="answer">
        <img src="${ans.avatar}" alt="${ans.name}" class="avatar">
        <div class="answer-content">
          <p>
            <strong>${ans.name}</strong>
            <span class="meta">– <span class="helpful-count">${ans.helpful}</span> helpful</span>
            <span class="timestamp">Posted just now</span>
          </p>
          <p>${ans.text}</p>
          <div class="actions">
            <button class="like"><i class="fas fa-thumbs-up"></i> Like</button>
            <button class="dislike"><i class="fas fa-thumbs-down"></i> Unlike</button>
            <button class="delete"><i class="fas fa-trash"></i> Delete</button>
            <button class="reply-btn" onclick="toggleReply(this)">Reply</button>
          </div>
          <div class="reply-box">
            <textarea placeholder="Write your reply..."></textarea>
            <input type="file" accept="image/*">
            <button class="submit-reply">Submit Reply</button>
          </div>
        </div>
      </div>
    `;
  });

  // Attach listeners
  answersContainer.querySelectorAll('.like').forEach(btn => {
    btn.addEventListener('click', () => {
      const countEl = btn.closest('.answer').querySelector('.helpful-count');
      countEl.textContent = parseInt(countEl.textContent) + 1;
    });
  });

  answersContainer.querySelectorAll('.dislike').forEach(btn => {
    btn.addEventListener('click', () => {
      const countEl = btn.closest('.answer').querySelector('.helpful-count');
      countEl.textContent = Math.max(0, parseInt(countEl.textContent) - 1);
    });
  });

  answersContainer.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.answer').remove();
    });
  });
}

/* ------------------ MOBILE ------------------ */
function showPage(pageId) {
  document.querySelectorAll('.page.mobile-only').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function toggleAnswerBoxMobile(button) {
  const answerBox = button.closest('#answers-mobile').querySelector('.answer-box');
  if (!answerBox) return;

  answerBox.classList.toggle('expanded');
}

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});



function showQuestionMobile(element) {
  const title = element.querySelector(".question-title")?.innerText || "";
  const snippet = element.querySelector(".question-snippet")?.innerText || "";
  const meta = element.querySelector(".meta")?.innerText || "";
  const imageSrc = element.querySelector("img")?.getAttribute("src") || "";
  const imageAlt = element.querySelector("img")?.getAttribute("alt") || "";

  document.getElementById("answer-title-mobile").innerText = title;
  document.getElementById("answer-meta-mobile").innerText = meta;
  document.getElementById("answer-text-mobile").innerText = snippet;

  const answerImages = document.getElementById("answer-images-mobile");
  answerImages.innerHTML = "";
  if (imageSrc) {
    const clone = document.createElement("img");
    clone.src = imageSrc;
    clone.alt = imageAlt;
    clone.className = "uploaded-img";
    answerImages.appendChild(clone);
  }

  const answersContainer = document.getElementById("answers-container-mobile");
  answersContainer.innerHTML = "";

  const answers = [
    { name: "Clara Ugwu", helpful: 7, text: "This is a placeholder answer.", avatar: "images/team-image/Kajinake.png" },
    { name: "Bryan Okafor", helpful: 25, text: "Check your controller mappings and debug the stack trace carefully.", avatar: "images/team-image/Bryan.png" },
    { name: "Ada Ebube", helpful: 7, text: "Try enabling debug logs in Spring Boot to trace the NullPointerException.", avatar: "images/team-image/Ada.png" }
  ];

  answers.forEach(ans => {
    answersContainer.innerHTML += `
      <div class="answer">
        <img src="${ans.avatar}" alt="${ans.name}" class="avatar">
        <div class="answer-content">
          <p>
            <strong>${ans.name}</strong>
            <span class="meta">– <span class="helpful-count">${ans.helpful}</span> helpful</span>
            <span class="timestamp">Posted just now</span>
          </p>
          <p>${ans.text}</p>
          <div class="actions">
            <button class="like">Like</button>
            <button class="dislike">Unlike</button>
            <button class="delete">Delete</button>
            <button class="reply-btn" onclick="toggleReply(this)">Reply</button>
          </div>
          <div class="reply-box">
            <textarea placeholder="Write your reply..."></textarea>
            <button class="submit-reply">Submit Reply</button>
          </div>
        </div>
      </div>
    `;
  });

  showPage("answers-mobile");
}
