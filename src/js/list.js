import './mobile-menu';
import './theme';
import './funds';
import './shopping-list';
import './scroll-up';
import './footer';
import './pagination';
import './firebase-service';
import './auth-user';
import './modal-auth';
import { isList } from './auth-user';

const activeMenu = document.querySelector('.js-list_menu');
activeMenu.classList.add('active');

isList = true;
