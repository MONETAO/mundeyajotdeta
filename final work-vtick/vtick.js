const introVideo = document.getElementById('intro-video');
const animation = document.getElementById('animation');
introVideo.addEventListener('ended', () => {
  animation.classList.add('fade-out');
  setTimeout(() => {
    animation.style.display = 'none';
  }, 1200); // 2秒後にアニメーションを非表示にする
});

const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    if (inputText === "ネクタル") {
      window.location.href = "https://monetao.github.io/deviewordiefanmadehomepage/final%20work/deviewordie.html";
    }
  });

  const inputText = document.getElementById("inputText");
inputText.addEventListener("blur", function() {
  if (this.value === "ネクタル") {
    const tokuseiImage = document.querySelector('.tokusei');
    tokuseiImage.setAttribute('src', '特性虹.png');
  }
});



$(document).ready(function() {
  $(".kong").click(function() {
    $(".relative-kowai").fadeOut("fast", function() {
      $("#kawaii").fadeIn("fast");
    });
  });
});
