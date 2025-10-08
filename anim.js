// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Para que tú me oigas mis palabras", time: 15 },
  { text: "se adelgazan a veces como ", time: 18 },
  { text: "las huellas de las gaviotas en las playas.", time: 27 },
  { text: "Collar, cascabel ebrio", time: 32 },
  { text: "para tus manos suaves como las uvas.", time: 33 },
  { text: "Tus manos son mi caricia", time: 41 },
  { text: "mis acordes cotidianos", time: 47 },
  { text: "te quiero porque tus manos", time: 54 },
  { text: "trabajan por la justicia.", time: 59 },
  { text: "Si te quiero es porque tú", time: 67 },
  { text: "mi amor mi cómplice y todo", time: 72 },
  { text: "y en la calle codo a codo", time: 78 },
  { text: "somos mucho más que dos.", time: 83 },
  { text: "Por una mirada, un mundo;", time: 91 },
  { text: "por una sonrisa, un cielo;", time: 97 },
  { text: "por un beso... ¡yo no sé", time: 104 },
  { text: "por un beso... ¡yo no sé", time: 108 },
  { text: "qué te diera por un beso!", time: 144 },
  { text: "¿Qué es poesía?”, dices mientras clavas", time: 148 },
  { text: "¿Qué es poesía?”, dices mientras clavas", time: 153 },
  { text: "en mi pupila tu pupila azul.", time: 158 },
  { text: "¿Qué es poesía? ¿Y tú me lo preguntas?", time: 164 },
  { text: "Poesía... eres tú.", time: 169 },
  { text: "Andábamos sin buscarnos", time: 176 },
  { text: "pero sabiendo que andábamos", time: 183 },
  { text: "para encontrarnos.", time: 188 },
  { text: "Tierna flor de Primavera", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);