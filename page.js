const nav = document.querySelector(".primary-nav");
const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
  var visible = nav.getAttribute("data-visible");
  visible === "false"
    ? nav.setAttribute("data-visible", "true") &
      toggle.setAttribute("aria-expanded", "true")
    : nav.setAttribute("data-visible", "false") &
      toggle.setAttribute("aria-expanded", "false");
});

window.addEventListener("resize", () => {
  nav.style.transition = "none";
  setTimeout(() => {
    nav.style.transition = "transform 250ms ease";
  }, 100);
});

var slideIndex = 1;

showSlideSpw1(slideIndex);

function openPreview1Lightbox() {
  document.getElementById("Preview1Lightbox").style.display = "block";
}

function closePreview1Lightbox() {
  document.getElementById("Preview1Lightbox").style.display = "none";
}

function changeSlideSpw1(n) {
  showSlideSpw1((slideIndex += n));
}

function toSlideSpw1(n) {
  showSlideSpw1((slideIndex = n));
}

function showSlideSpw1(n) {
  const slides = document.getElementsByClassName("spw1");
  let modalPreviews = document.getElementsByClassName("mpw1");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

showSlideSpw2(slideIndex);

function openPreview2Lightbox() {
  document.getElementById("Preview2Lightbox").style.display = "block";
}

function closePreview2Lightbox() {
  document.getElementById("Preview2Lightbox").style.display = "none";
}

function changeSlideSpw2(n) {
  showSlideSpw2((slideIndex += n));
}

function toSlideSpw2(n) {
  showSlideSpw2((slideIndex = n));
}

function showSlideSpw2(n) {
  const slides = document.getElementsByClassName("spw2");
  let modalPreviews = document.getElementsByClassName("mpw2");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

showSlideSpw3(slideIndex);

function openPreview3Lightbox() {
  document.getElementById("Preview3Lightbox").style.display = "block";
}

function closePreview3Lightbox() {
  document.getElementById("Preview3Lightbox").style.display = "none";
}

function changeSlideSpw3(n) {
  showSlideSpw3((slideIndex += n));
}

function toSlideSpw3(n) {
  showSlideSpw3((slideIndex = n));
}

function showSlideSpw3(n) {
  const slides = document.getElementsByClassName("spw3");
  let modalPreviews = document.getElementsByClassName("mpw3");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

showSlideSpr1(slideIndex);

function openProject1Lightbox() {
  document.getElementById("Project1Lightbox").style.display = "block";
}

function closeProject1Lightbox() {
  document.getElementById("Project1Lightbox").style.display = "none";
}

function changeSlideSpr1(n) {
  showSlideSpr1((slideIndex += n));
}

function toSlideSpr1(n) {
  showSlideSpr1((slideIndex = n));
}

function showSlideSpr1(n) {
  const slides = document.getElementsByClassName("spr1");
  let modalPreviews = document.getElementsByClassName("mpr1");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

showSlideSpr2(slideIndex);

function openProject2Lightbox() {
  document.getElementById("Project2Lightbox").style.display = "block";
}

function closeProject2Lightbox() {
  document.getElementById("Project2Lightbox").style.display = "none";
}

function changeSlideSpr2(n) {
  showSlideSpr2((slideIndex += n));
}

function toSlideSpr2(n) {
  showSlideSpr2((slideIndex = n));
}

function showSlideSpr2(n) {
  const slides = document.getElementsByClassName("spr2");
  let modalPreviews = document.getElementsByClassName("mpr2");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

function closeModal() {
  closePreview1Lightbox();
  closePreview2Lightbox();
  closePreview3Lightbox();
  closeProject1Lightbox();
  closeProject2Lightbox();
}
