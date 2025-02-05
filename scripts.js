// Function to load pages dynamically
function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            document.getElementById('content').innerHTML = '<h2>Error: Page could not be loaded.</h2>';
        });
}
