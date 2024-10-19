document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  const enableDarkMode = () => {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  };

  const disableDarkMode = () => {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  };

  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  }

  darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});
