const inputSiteName = document.querySelector('#site-name');
const inputSiteUrl = document.querySelector('#site-url');
const formSite = document.querySelector('#form-site');
const list = document.querySelector('#site-list');

let bookmarks = localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : []; 

formSite.addEventListener('submit', (e) => {
    if (inputSiteName.value && inputSiteUrl.value) {
        renderBookmark();
        e.preventDefault();
    }
});