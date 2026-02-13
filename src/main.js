// Import styles
import './style.css';

// Initialize Telegram Web App
const tg = window.Telegram.WebApp;

// Expand the app to full height
tg.expand();

// Set theme colors based on Telegram theme
document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color || '#ffffff');
document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color || '#000000');
document.documentElement.style.setProperty('--tg-theme-button-color', tg.themeParams.button_color || '#2481cc');
document.documentElement.style.setProperty('--tg-theme-button-text-color', tg.themeParams.button_text_color || '#ffffff');

// Log user info (available in Telegram)
console.log('User:', tg.initDataUnsafe?.user);

// Main app logic
function initApp() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="container">
      <h1>Hello, ${tg.initDataUnsafe?.user?.first_name || 'User'}!</h1>
      <p>Welcome to your Telegram Mini App</p>
      <button id="send-data-btn">Send Data to Telegram</button>
      <button id="close-btn">Close App</button>
    </div>
  `;

  // Add event listeners
  document.getElementById('send-data-btn').addEventListener('click', () => {
    tg.sendData('Hello from Mini App!');
  });

  document.getElementById('close-btn').addEventListener('click', () => {
    tg.close();
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

