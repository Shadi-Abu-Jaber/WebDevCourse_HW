const skins = ["/01_HW/SKINS/basic.css", "/01_HW/SKINS/dark.css", "/01_HW/SKINS/modern.css"];

let currentSkin = 0;

function changeSkin() {
  const link = document.getElementById("skinLink");

  currentSkin = (currentSkin + 1) % skins.length;
  link.href = skins[currentSkin];
}
