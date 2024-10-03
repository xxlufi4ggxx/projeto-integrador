document.getElementById('agendamentoForm').addEventListener('submit', event => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const profissional = document.getElementById('profissional').value;
    const formatoRosto = document.getElementById('formatoRosto').value;
    const tomPele = document.getElementById('tomPele').value;
    const horario = document.getElementById('horario').value;

    const gerarRecomendacao = (formatoRosto, tomPele) => {
        let recomendacao = '';

        if (formatoRosto === 'Oval') {
            recomendacao = 'Recomendamos um corte de cabelo em camadas, que valoriza o formato oval.';
        } else if (formatoRosto === 'Redondo') {
            recomendacao = 'Cortes retos e franjas longas ajudam a alongar o rosto redondo.';
        } else if (formatoRosto === 'Quadrado') {
            recomendacao = 'Cortes desfiados e camadas suaves suavizam os traços marcantes de rostos quadrados.';
        }

        if (tomPele === 'Claro') {
            recomendacao += ' Para tinturas, tons loiros ou castanhos claros podem combinar bem com seu tom de pele.';
        } else if (tomPele === 'Médio') {
            recomendacao += ' Para tinturas, tons castanhos e caramelos realçam sua pele média.';
        } else if (tomPele === 'Escuro') {
            recomendacao += ' Para tinturas, tons escuros como preto ou castanho profundo ficam ótimos em tons de pele escuros.';
        }

        return recomendacao;
    };

    const recomendacaoEstilo = gerarRecomendacao(formatoRosto, tomPele);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h3>Agendamento Confirmado</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Profissional:</strong> ${profissional}</p>
        <p><strong>Horário:</strong> ${horario}</p>
        <h4>Recomendação de Estilo:</h4>
        <p>${recomendacaoEstilo}</p>
    `;
});
