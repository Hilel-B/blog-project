import './navbar.css'

class Navbar{
    constructor(){
        this.username = 'Your Name';
        this.links = [
            {
                name: 'Blog',
                link: './blog.html'
            },
            {
                name: 'Projects',
                link: './projects.html'
            },
            {
                name: 'About',
                link: './about.html'
            },
            {
                name: 'Newsletter',
                link: 'newsletter.html'
            }
        ]
    }
    init(){
        document.querySelector('body').insertAdjacentHTML('afterbegin', `
        <div class='navbar'>
            <div class='navbar-username'>${this.username}</div>
            <div class='navbar-links'></div>
            <div class='navbar-theme-button'>
                <i class="fa-solid fa-toggle-off"></i>
            </div>
        <div>
        `);

        const toggle = document.querySelector('.navbar-theme-button i');

        toggle.addEventListener('click', ()=>{
            toggle.classList.toggle('fa-toggle-on');
            toggle.classList.toggle('fa-toggle-off');
            document.querySelector('body').classList.toggle('dark-theme');
            
        });

        const navbar = document.querySelector('.navbar');
        console.log(navbar);

        this.links.forEach(el =>{
            navbar.querySelector('.navbar-links').insertAdjacentHTML('beforeend', `<a href='${el.link}'>${el.name}<div>`);
        });
    }

}

export {Navbar as default};