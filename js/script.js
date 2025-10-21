console.log("A Batch Coders Portal Loaded!");

// === Background Image Changer with LocalStorage ===
const bgInput = document.getElementById("bgInput");

// Agar pehle se koi background saved hai to usko apply karo
const savedBg = localStorage.getItem("userBackground");
if (savedBg) {
  document.body.style.backgroundImage = `url('${savedBg}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
}

// Jab user naya background select kare
bgInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;
      document.body.style.backgroundImage = `url('${imageUrl}')`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";

      // LocalStorage me save karo
      localStorage.setItem("userBackground", imageUrl);
    };
    reader.readAsDataURL(file);
  }
});