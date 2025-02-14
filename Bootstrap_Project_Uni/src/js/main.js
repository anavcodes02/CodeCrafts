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
