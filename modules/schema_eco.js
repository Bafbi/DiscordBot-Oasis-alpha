const mongoose = require('mongoose');

const ProfilSchema = mongoose.Schema({
    server: String,
    user_ID: String,
    pseudo: String,
    xp: Number,
    level: Number,
    balance: Number,

});

module.exports = mongoose.model("profil", ProfilSchema);