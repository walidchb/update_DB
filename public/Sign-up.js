const ajouter = document.getElementById("AJT_action_btn");
const modifier = document.getElementById("EDT_action_btn");
const suprimer = document.getElementById("DLT_action_btn");

const ajouter_form = document.querySelector(".form_student_ajouter");
const modifier_form = document.querySelector(".form_student_modifier_hidden");
const suprimer_form = document.querySelector(".form_student_suprimer_hidden");
const search_student_button = document.querySelector(".search_student_button");
// const data_to_search = document.querySelector(".data_input");
const datashow = document.querySelector(".datashow_hidden");
// let datalookfor = "";
// data_to_search.addEventListener("change", (e) => {
//   datalookfor = data_to_search.value;
// });

// search_student_button.addEventListener("click", () => {
//   datashow.classList.add("datashow");
//   datashow.classList.remove("datashow_hidden");
//   ajouter_form.classList.remove("form_student_ajouter");
//   ajouter_form.classList.add("form_student_ajouter_hidden");
//   modifier_form.classList.remove("form_student_modifier");
//   modifier_form.classList.add("form_student_modifier_hidden");
//   suprimer_form.classList.remove("form_student_suprimer");
//   suprimer_form.classList.add("form_student_suprimer_hidden");
// });

ajouter.addEventListener("click", () => {
  // location.href = "ajouter";
  // datashow.classList.add("datashow_hidden");
  // datashow.classList.remove("datashow");
  ajouter_form.classList.add("form_student_ajouter");
  ajouter_form.classList.remove("form_student_ajouter_hidden");
  modifier_form.classList.remove("form_student_modifier");
  modifier_form.classList.add("form_student_modifier_hidden");
  suprimer_form.classList.remove("form_student_suprimer");
  suprimer_form.classList.add("form_student_suprimer_hidden");
});

modifier.addEventListener("click", () => {
  // location.href = "modifer";
  // datashow.classList.add("datashow_hidden");
  // datashow.classList.remove("datashow");
  modifier_form.classList.add("form_student_modifier");
  modifier_form.classList.remove("form_student_modifier_hidden");
  ajouter_form.classList.remove("form_student_ajouter");
  ajouter_form.classList.add("form_student_ajouter_hidden");
  suprimer_form.classList.remove("form_student_suprimer");
  suprimer_form.classList.add("form_student_suprimer_hidden");
});

suprimer.addEventListener("click", () => {
  // location.href = "suprimer";
  // datashow.classList.add("datashow_hidden");
  // datashow.classList.remove("datashow");
  suprimer_form.classList.add("form_student_suprimer");
  suprimer_form.classList.remove("form_student_suprimer_hidden");
  modifier_form.classList.remove("form_student_modifier");
  modifier_form.classList.add("form_student_modifier_hidden");
  ajouter_form.classList.remove("form_student_ajouter");
  ajouter_form.classList.add("form_student_ajouter_hidden");
});
