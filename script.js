document.documentElement.setAttribute('data-scroll', window.scrollY);


window.addEventListener('scroll', function() {
    document.documentElement.setAttribute('data-scroll', window.scrollY);
});