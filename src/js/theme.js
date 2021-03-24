const switcher = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onSwitcherChange() {
    if (switcher.checked) {
        changeClass('dark-theme', 'light-theme');
        localStorage.setItem('theme', Theme.DARK)
        
    } else {
        changeClass('light-theme', 'dark-theme');
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

function changeClass(add, remove) {
    bodyRef.classList.add(add);
    bodyRef.classList.remove(remove);
}

switcher.addEventListener('change', onSwitcherChange);
savedTheme();