window.addEventListener('beforeunload', () => {
    const state = {
        url: window.location.href,
        scrollPosition: window.scrollY,
    };
    localStorage.setItem('appState', JSON.stringify(state));
});

window.addEventListener('load', () => {
    localStorage.clear();
    const savedState = JSON.parse(localStorage.getItem('appState'));
    if (savedState) {
        window.location.href = savedState.url;
        window.scrollTo(0, savedState.scrollPosition);
    }
});
