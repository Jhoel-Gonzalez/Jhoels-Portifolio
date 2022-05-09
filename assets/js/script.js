let itens = document.querySelectorAll('.nav-item')
itens.forEach(links => {
    links.addEventListener('click', function () {
        itens.forEach(link => link.classList.remove('active'))
        this.classList.add('active')
    })
})