
function carregarDados() {
    const posts = JSON.parse(localStorage.getItem("posts"))

    posts.forEach(element => {
        const tr = document.createElement('tr')
    
        const tituloCell = document.createElement('td')
        tituloCell.innerText = element.titulo
        tr.append(tituloCell)
    
        const categoriaTd = document.createElement('td')
        categoriaTd.innerText = element.categoria
        tr.append(categoriaTd)

        const descricaoTd = document.createElement('td')
        descricaoTd.innerText = element.descricao
        tr.append(descricaoTd)
        
        const dataTd = document.createElement('td')
        dataTd.innerText = element.data
        tr.append(dataTd)

        const butontdTd = document.createElement('td')
        const button = document.createElement('button')
        button.innerText = 'Deletar'
        button.onclick = () => deletar(element.id)
        butontdTd.append(button)
        tr.append(butontdTd)

        document.getElementById('tabelaPosts').append(tr)
    });

    function deletar(id) {
        const postsLocalHost = JSON.parse(localStorage.getItem("posts"))
        const postsAtualizado = postsLocalHost.filter((item) => item.id !== id)
        localStorage.setItem('posts', JSON.stringify(postsAtualizado))

document.getElementById('tabelaPosts').innerText = ''

        carregarDados()
        }
}

document.addEventListener('DOMContentLoaded', carregarDados())
