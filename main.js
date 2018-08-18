const inputSiteName = document.querySelector('#site-name');
const inputSiteUrl = document.querySelector('#site-url');
const formSite = document.querySelector('#form-site');
const list = document.querySelector('#site-list');

let bookmarks = localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : [];
firstRendering();


formSite.addEventListener('submit', (e) => {
    // Get the value from inputs
    let site = inputSiteName.value;
    let url = inputSiteUrl.value;

    if (site && url) {
        renderBookmark(site, url);
        saveBookmark(site, url);
        e.preventDefault();
    }
});