import $ from 'jquery';

window.$ = window.jQuery = $;

$(document).ready(function() {
    console.log('jQuery loaded and ready');
    console.log('Current page:', window.location.pathname);

    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        import('./index.js').then(() => {
            console.log('index.js loaded');
        }).catch(err => {
            console.error('Error loading index.js:', err);
        });
    }
});
