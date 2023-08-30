function listaDePessoas() {
    const data = [
        { nome: "Felipe", idade: 20 },
        { nome: "Alessandra", idade: 23 },
        { nome: "Mateus", idade: 26 },
        { nome: "Leonardo", idade: 19 },
        { nome: "Lucas", idade: 22 }
    ];

    const lista = data.map(item => `<li>${item.nome} - ${item.idade} anos</li>`);

    return lista.join(""); // Transforma o array de strings em uma única string
}

// Recupera o elemento <ul> pelo ID
const ul = document.getElementById("idLista");

// Chama a função para criar a lista e insere no elemento <ul> usando innerHTML
ul.innerHTML = listaDePessoas();