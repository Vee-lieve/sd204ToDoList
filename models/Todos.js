const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDosSchema = Schema({
    task: {type: String, required: true},
    day: {type: Date, required: true},
});

const ToDos = mongoose.model("ToDos", ToDosSchema);

module.exports = ToDos;