const switcher = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onSwitcherChange() {
    if (switcher.checked) {
        bodyRef.classList.add('dark-theme');
        bodyRef.classList.remove('light-theme');
        localStorage.setItem('theme', Theme.DARK)
        
    } else {
        bodyRef.classList.remove('dark-theme');
        bodyRef.classList.add('light-theme');
        localStorage.setItem('theme', Theme.LIGHT)
        
    }
}

function savedTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === Theme.DARK) {
        switcher.checked = 'true';
        onSwitcherChange();
    }
}

switcher.addEventListener('change', onSwitcherChange);
savedTheme();