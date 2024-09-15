document.addEventListener("DOMContentLoaded", function() {
    fetch('/includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // Optionally, load the CSS here if needed
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'assets/css/header-styles.css';
            document.head.appendChild(link);
        });
});

