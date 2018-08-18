const renderBookmark = (siteName, siteUrl) => {
    // Create the DOM elements
    let bookmark = document.createElement('li');
    let p = document.createElement('p');
    let visitLink = document.createElement('a');
    let deleteLink = document.createElement('a');

    // Change text & content value
    p.textContent = siteName;
    visitLink.href = siteUrl;
    visitLink.textContent = 'Visit';
    deleteLink.textContent = 'Delete';

    // Add classes
    bookmark.classList.add('list-group-item', 'd-flex', 'mb-2');
    p.classList.add('mr-auto');
    visitLink.classList.add('mr-2', 'btn', 'btn-info', 'text-white');
    deleteLink.classList.add('mr-2', 'btn', 'btn-danger', 'text-white');

    // Set attributes
    visitLink.setAttribute('target', '_blank');

    // Populate the DOM
    bookmark.append(p, visitLink, deleteLink);
    list.insertBefore(bookmark, list.firstChild)

    // Add listener
    deleteLink.addEventListener('click', deleteBookmark);
}

const saveBookmark = (siteName, siteUrl) => {
    let bookmark = {
        name: siteName,
        url: siteUrl
    }

    bookmarks.push(bookmark);
    updateBookmarksObject();
}

const deleteBookmark = function () {
    let li = this.parentNode;
    let p = Array.from(li.getElementsByTagName('p'));
    let siteName = p[0].textContent;

    let item = bookmarks.find((bookmark) => bookmark.name === siteName);
    bookmarks.splice(bookmarks.indexOf(item), 1)

    updateBookmarksObject();
    list.removeChild(this.parentNode);
}

const firstRendering = () => {
    if (bookmarks.length === null) return;

    bookmarks.forEach(bookmark => {
        renderBookmark(bookmark.name, bookmark.url);
    });
}

const updateBookmarksObject = () => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}