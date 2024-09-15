document.addEventListener("DOMContentLoaded", function() {
    fetch('/includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            // Optionally, load the CSS here if needed
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'assets/css/footer-styles.css';
            document.head.appendChild(link);
        });
});
