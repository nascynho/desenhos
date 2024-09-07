function pesquisar() {
    // Obtém uma seção HTML onde os resultados são exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um desenho</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Se título, descrição ou tags incluem campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Se não encontrou nenhum resultado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}












//caso queira usar em HTML

// dados.forEach(function (desenho){
//    console.log("Título: " + desenho.titulo)
//    console.log("Descrição " + desenho.descricao)
//    console.log("Link: " + desenho.link)
//    console.log("---------------------");
// });