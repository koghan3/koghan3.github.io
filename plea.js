// Green falling lines instead of rain
const rain = document.getElementById('rain');
for (let i = 0; i < 40; i++) {
  const line = document.createElement('div');
  line.className = 'rain-line';
  line.style.left              = Math.random() * 100 + '%';
  line.style.height            = (Math.random() * 30 + 15) + 'px';
  line.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
  line.style.animationDelay   = Math.random() * 3 + 's';
  line.style.opacity           = (Math.random() * 0.4 + 0.1).toString();
  rain.appendChild(line);
}
