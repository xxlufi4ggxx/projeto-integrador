// models/Agendamento.js
const mongoose = require('mongoose');

const AgendamentoSchema = new mongoose.Schema({
    nome: String,
    servico: String,
    profissional: String,
    formatoRosto: String,
    tomPele: String,
    horario: String,
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Agendamento', AgendamentoSchema);
