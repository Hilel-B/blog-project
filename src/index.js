import './index.css';
import Navbar from './components/navbar';
import RecentPosts from './components/recentPosts';

const navbar = new Navbar();
navbar.init();

const recentPosts = new RecentPosts();

recentPosts.init();
recentPosts.displayPosts();