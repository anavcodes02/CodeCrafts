document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is running!");

    // Adicionar noticias
    const newsList = document.getElementById('newsList');
    const newsItems = [
        'Notícia 1: Detalhes da primeira notícia.',
        'Notícia 2: Detalhes da segunda notícia.',
        'Notícia 3: Detalhes da terceira notícia.'
    ];

    newsItems.forEach(function(news) {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(news));
        newsList.appendChild(li);
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

