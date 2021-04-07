const sounds = [
  "G#",
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    document.getElementById(sound).play();
  });
  btn.addEventListener("keypress", (e) => {
    if ((e.key = "a") || (e.key = "A")) {
      alert(e.key);
    }
  });
  document.getElementById("buttons").appendChild(btn);
});

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "KeyA":
      document.getElementById("G#").play();
      break;
    case "KeyS":
      document.getElementById("A").play();
      break;
    case "KeyD":
      document.getElementById("A#").play();
      break;
    case "KeyF":
      document.getElementById("B").play();
      break;
    case "KeyG":
      document.getElementById("C").play();
      break;
    case "KeyH":
      document.getElementById("C#").play();
      break;
    case "KeyJ":
      document.getElementById("D").play();
      break;
    case "KeyK":
      document.getElementById("D#").play();
      break;
    case "KeyL":
      document.getElementById("E").play();
      break;
    case "Semicolon":
      document.getElementById("F").play();
      break;
    case "Quote":
      document.getElementById("G").play();
      break;
    default:
      break;
  }
});
