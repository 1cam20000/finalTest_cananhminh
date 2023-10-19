const hero1 = document.getElementById("hero1");
const heroDetail_1 = document.getElementById("hero-detail-1");
let switch_img = true;
const hero2 = document.getElementById("hero2");
const heroDetail_2 = document.getElementById("hero-detail-2");
let switch_img2 = true;
const hero3 = document.getElementById("hero3");
const heroDetail_3 = document.getElementById("hero-detail-3");
let switch_img3 = true;
const hero4 = document.getElementById("hero4");
const heroDetail_4 = document.getElementById("hero-detail-4");
let switch_img4 = true;
const hero5 = document.getElementById("hero5");
const heroDetail_5 = document.getElementById("hero-detail-5");
let switch_img5 = true;
const hero6 = document.getElementById("hero6");
const heroDetail_6 = document.getElementById("hero-detail-6");
let switch_img6 = true;

hero1.addEventListener("click", () => {
  if (switch_img) {
    heroDetail_1.style.display = "block";
    heroDetail_2.style.display = "none";
    heroDetail_3.style.display = "none";
    heroDetail_4.style.display = "none";
    heroDetail_5.style.display = "none";
    heroDetail_6.style.display = "none";
    console.log(switch_img);
  }
  // switch_img = !switch_img;
});

hero2.addEventListener("click", () => {
  if (switch_img2) {
    heroDetail_2.style.display = "block";
    heroDetail_1.style.display = "none";
    heroDetail_3.style.display = "none";
    heroDetail_4.style.display = "none";
    heroDetail_5.style.display = "none";
    heroDetail_6.style.display = "none";
  }
  // switch_img2 = !switch_img2;
});

hero3.addEventListener("click", () => {
  if (switch_img3) {
    heroDetail_3.style.display = "block";
    heroDetail_1.style.display = "none";
    heroDetail_2.style.display = "none";
    heroDetail_4.style.display = "none";
    heroDetail_5.style.display = "none";
    heroDetail_6.style.display = "none";
  }
  // switch_img3 = !switch_img3;
});

hero4.addEventListener("click", () => {
  if (switch_img4) {
    heroDetail_4.style.display = "block";
    heroDetail_1.style.display = "none";
    heroDetail_2.style.display = "none";
    heroDetail_3.style.display = "none";
    heroDetail_5.style.display = "none";
    heroDetail_6.style.display = "none";
  }
  // switch_img4 = !switch_img4;
});

hero5.addEventListener("click", () => {
  if (switch_img5) {
    heroDetail_5.style.display = "block";
    heroDetail_1.style.display = "none";
    heroDetail_2.style.display = "none";
    heroDetail_3.style.display = "none";
    heroDetail_4.style.display = "none";
    heroDetail_6.style.display = "none";
  }
  // switch_img5 = !switch_img5;
});

hero6.addEventListener("click", () => {
  if (switch_img6) {
    heroDetail_6.style.display = "block";
    heroDetail_1.style.display = "none";
    heroDetail_2.style.display = "none";
    heroDetail_3.style.display = "none";
    heroDetail_4.style.display = "none";
    heroDetail_5.style.display = "none";
  }
  // switch_img6 = !switch_img6;
});
