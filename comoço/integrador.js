// script.js

document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const profissional = document.getElementById('profissional').value;
    const horario = document.getElementById('horario').value;

    // Exibe o resultado do agendamento
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h3>Agendamento Confirmado</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Profissional:</strong> ${profissional}</p>
        <p><strong>Horário:</strong> ${horario}</p>
    `;

    // Aqui você poderia adicionar lógica para salvar o agendamento em um banco de dados, por exemplo.
});
