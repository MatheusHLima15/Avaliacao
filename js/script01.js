document.addEventListener('DOMContentLoaded', function () {
    var detalhesCompra = [];

    function adicionarProduto(nome, descricao) {
        detalhesCompra.push({ nome: nome, descricao: descricao });
        atualizarDetalhesCompra();
    }

    function atualizarDetalhesCompra() {
        var listaProdutos = document.getElementById('listaProdutos');
        if (!listaProdutos) {
            // Cria a lista de detalhes da compra se ainda não existir
            listaProdutos = document.createElement('ul');
            listaProdutos.id = 'listaProdutos';
            listaProdutos.style.listStyleType = 'none';
            var detalhesCompraSection = document.getElementById('detalhesCompra');
            detalhesCompraSection.appendChild(listaProdutos);
        } else {
            listaProdutos.innerHTML = '';
        }

        detalhesCompra.forEach(function (produto) {
            var li = document.createElement('li');
            li.textContent = `${produto.nome} - ${produto.descricao}`;
            listaProdutos.appendChild(li);
        });
    }

    var botoesCompra = document.querySelectorAll('button[type="submit"]');
    botoesCompra.forEach(function (botao) {
        botao.addEventListener('click', function () {
            var card = botao.closest('.card');
            var nomeProduto = card.querySelector('.card-title').textContent;
            var descricaoProduto = card.querySelector('.card-text').textContent;
            adicionarProduto(nomeProduto, descricaoProduto);
        });
    });
});