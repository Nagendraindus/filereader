

const toggleModeButton = document.getElementById('colorModeButton');
const body = document.body;
var cl = "light mode"
toggleModeButton.addEventListener('click', () => {
    document.querySelector("#colorModeButton").textContent=cl;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        toggleModeButton.textContent = 'Light Mode';
      } else {
        toggleModeButton.textContent = 'Dark Mode';
      }
    });





const fileInput = document.getElementById('fileInput');
const readFileButton = document.getElementById('readFileButton');
const stopFileButton = document.getElementById('stopButton'); // New button for stopping

let speechInstanceFromFile = null; // Variable to hold the SpeechSynthesisUtterance instance

readFileButton.addEventListener('click', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      if (contents) {
        // If there's an ongoing speech, cancel it before starting a new one
        if (speechInstanceFromFile && speechSynthesis.speaking) {
          speechSynthesis.cancel();
        }

        // Create a new SpeechSynthesisUtterance instance
        speechInstanceFromFile = new SpeechSynthesisUtterance(contents);
        speechSynthesis.speak(speechInstanceFromFile);
      }
    };

    reader.readAsText(file);
  }
});

stopFileButton.addEventListener('click', () => {
  if (speechInstanceFromFile && speechSynthesis.speaking) {
    speechSynthesis.cancel(); // Stop the ongoing speech from the uploaded file
  }
});
