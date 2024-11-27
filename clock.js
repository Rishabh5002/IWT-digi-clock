// Digital Clock Functionality
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Theme Switching Functionality
  const themeSelector = document.getElementById('theme-selector');
  
  themeSelector.addEventListener('change', (e) => {
    const theme = e.target.value;
    document.body.className = theme; // Apply the theme as a class to the body
    document.getElementById('clock').className = theme; // Apply the theme to the clock
  });
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  updateClock(); // Initial call to display the time immediately
  