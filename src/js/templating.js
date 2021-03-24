import foodCards from '../templates/food-cards.hbs'
import menu from '../menu.json'
const markup = foodCards(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);