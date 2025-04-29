document.addEventListener('DOMContentLoaded', carregarUsuarios)

const carregarUsuarios = () => {
    fetch('http://localhost:8080/usuarios')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar usuários.')
        }
        response.json()
    })
    .then(usuarios => {
        const lista = document.getElementById('listaUsuarios')
        
        if (usuarios.lenght === 0) {
            lista.innerHTML = '<li>Nenhum usuário encontrado. <li>'
        }

        usuarios.forEach(usuario => {
            const item = document.createElement('li')
            item.innerHTML = `<strong>Nome: </strong> ${usuario.nome}<br>
            <strong>Email</strong> ${usuario.email}`
            lista.appendChild(item)
        })

    })
    .catch(erro => {
        document.getElementById('listaUsuarios').innerHTML = 
        '<li>Erro ao carregar usuários.</li>'
    })
}