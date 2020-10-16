import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".trigger-reveal"), "40%");
new RevealOnScroll($(".trigger-footer"), "95%");
var stickyHeader = new StickyHeader();
var modal = new Modal();