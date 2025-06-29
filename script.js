const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.content-section');

// Função que mostra a página certa e esconde as outras .
function showPage(pageId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.add('active');
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // previne que a página recarregue
        event.preventDefault(); 
        
        const targetPage = link.getAttribute('data-page');

        // Chama a função pra fazer a troca
        showPage(targetPage);

        // Atualiza o visual do menu pra destacar o link ativo
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
