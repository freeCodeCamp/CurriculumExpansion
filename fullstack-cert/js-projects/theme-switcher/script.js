const themes = [
  {
    name: 'light',
    message: 'Hello sunshine — Light theme is on!'
  },
  {
    name: 'dark',
    message: 'The night is yours — Dark theme is on!'
  },
  {
    name: 'nord',
    message: 'The frost has settled - Nord theme is on!'
  },
  {
    name: 'ocean',
    message: 'Blue skies and high tides — Ocean theme is on!'
  },
];

const setTheme = theme => {
  document.body.className = '';
  document.body.classList.add(`theme-${theme.name}`);
}

const updateStatus = theme => {
  const status = document.getElementById('status');

  status.textContent = theme.message;
}

document.addEventListener('DOMContentLoaded', () => {
  themes.forEach(theme => {
    const button = document.getElementById(`theme-${theme.name}`);

    if (button) {
      button.addEventListener('click', () => {
        setTheme(theme);
        updateStatus(theme);
        closeMenu();
      });
    }
  });

  const toggleButton = document.getElementById('themeSwitcherButton');
  const menu = document.getElementById('themeDropdown');

  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  function closeMenu() {
    menu.setAttribute('hidden', '');
    toggleButton.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    menu.removeAttribute('hidden');
    toggleButton.setAttribute('aria-expanded', 'true');
  }

  // Close the menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggleButton.contains(e.target) && !menu.contains(e.target)) {
      closeMenu();
    }
  });
});
