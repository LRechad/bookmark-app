const renderBookmark = () => {
    // Get the value from inputs
    let siteInput = inputSiteName.value;
    let urlInput = inputSiteUrl.value;

    // Create the DOM elements
    let bookmark = document.createElement('li');
    let p = document.createElement('p');
    let visitLink = document.createElement('a');
    let deleteLink = document.createElement('a');

    // Change text value
    p.textContent = siteInput;
    visitLink.href = urlInput;
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
    localStorage.setItem('bookmarks', JSON.stringify(bookmark));
}

const deleteBookmark = function () {
    list.removeChild(this.parentNode);
}

