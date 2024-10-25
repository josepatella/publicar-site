function cadastrarPostagem(event) {
    event.preventDefault()

    const titulo = document.getElementById("titulo").value
    const descricao = document.getElementById("descricao").value
    const categoria = document.getElementById("categoria").value
    const foto = document.getElementById("foto").value

    const post = {
        id: crypto.randomUUID(),
        titulo,
        descricao,
        categoria,
        foto,
        dataCriacao: new Date().getDate()
    }

    let listadePostagens = JSON.parse(localStorage.getItem("posts"))

    if (listadePostagens === null) listadePostagens = []

    listadePostagens.push(post)

    localStorage.setItem("posts", JSON.stringify(listadePostagens)) 

    document.getElementById('gerarPostagem').reset()


localStorage.setItem("postagem", JSON.stringify(post))
}

document
  .getElementById("gerarPostagem")
  .addEventListener("submit", cadastrarPostagem)
