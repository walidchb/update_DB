const mongoose = require("mongoose");
const { stringify } = require("uuid");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  matricule: String,
  nom: String,
  prenom: String,
  section: String,
  groupe: String,
});

const student = mongoose.model("student", StudentSchema);

module.exports = student;
