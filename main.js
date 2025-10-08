// jQuery is already loaded globally from the HTML script tags
// Wait for jQuery to be available
if (typeof $ !== 'undefined') {
    console.log('jQuery loaded and ready');
    console.log('Current page:', window.location.pathname);

    // Load index.js for the home page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        import('./index.js').then(() => {
            console.log('index.js loaded');
        }).catch(err => {
            console.error('Error loading index.js:', err);
        });
    }
} else {
    console.error('jQuery not loaded');
}
