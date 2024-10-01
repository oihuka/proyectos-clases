import { Header } from './components/Header/Header.js';
import { Hero } from './components/Hero/Hero.js';
import { About } from './components/About/About.js';
import { Experience } from './components/Experience/Experience.js';
import { Projects } from './components/Projects/Projects.js';
import { Contact } from './components/Contact/Contact.js';
import { SocialIcons } from './components/SocialIcons/SocialIcons.js';

document.addEventListener('DOMContentLoaded', () => {
  Header();
  Hero();
  About();
  Experience();
  Projects();
  Contact();
  SocialIcons();
});