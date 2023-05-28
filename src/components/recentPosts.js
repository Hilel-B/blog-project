
class RecentPosts{
    constructor(){
        this.title = 'Recent blog posts';

    }
    init(){
        document.querySelector('.recent-posts').insertAdjacentHTML('afterbegin', `<h2>${this.title}</h2>`);

    }
    getPosts(){
        const posts = [{
            title: 'UX review presentations',
            description: 'blablabla',
            date: 'sunday, 1 Jan 2023',
            tags: ['Design', 'research', 'presentation'],
            image: 'https://picsum.photos/400/400'
        },
        {
            title: 'migrating to linear',
            description: 'blublublu',
            date: 'monday, 1 Dec 2022',
            tags: ['Design', 'research'],
            image: 'https://picsum.photos/400/400'
        },
        {
            title: 'Building you API stack',
            description: 'dumdumdum',
            date: 'saturday, 1 Oct 2023',
            tags: ['Design', 'research'],
            image: 'https://picsum.photos/400/400'
        },
        {
            title: 'Grid for better design',
            description: 'bumbumbum',
            date: 'sunday, 1 jun 2023',
            tags: ['Design', 'interface'],
            image: 'https://picsum.photos/400/400'
        },
    ];
        return posts;
    }
    displayPosts(){
        const posts = this.getPosts();

        posts.forEach(post =>{
            console.log(post.tags);
            document.querySelector('.recent-posts').insertAdjacentHTML('beforeend', `
            <div class='blog-post'>
                <img class='post-image' src='${post.image}' height='200px'/>
                <p class='post-creation-date'>${post.date}</p>
                <h3 class='post-title'>${post.title}</h3>
                <p class='post-description' >${post.description}</p>

                ${post.tags
                    .map(tag =>`<p>${tag}</p>`)
                    .join('')
                }

            </div>
            `)

        })
    }
}

export {RecentPosts as default};