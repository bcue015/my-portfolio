import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".trigger-reveal"), "40%");
new RevealOnScroll($(".trigger-footer"), "95%");
var stickyHeader = new StickyHeader();