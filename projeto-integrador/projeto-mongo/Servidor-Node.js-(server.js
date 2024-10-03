// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Modelos
const Agendamento = require('./models/Agendamento');

// Conexão com MongoDB
mongoose.connect('mongodb://localhost/salao', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota para agendamento
app.post('/agendar', async (req, res) => {
    const { nome, servico, profissional, formatoRosto, tomPele, horario } = req.body;

    try {
        const agendamento = new Agendamento({
            nome,
            servico,
            profissional,
            formatoRosto,
            tomPele,
            horario
        });

        await agendamento.save();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Erro ao salvar o agendamento.' });
    }
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
