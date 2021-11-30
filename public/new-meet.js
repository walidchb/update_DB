const Student = document.getElementById("Std_btn");
const Modules = document.getElementById("Mdl_btn");
const Exams = document.getElementById("Exm_btn");

Student.addEventListener("click", function () {
  location.href = "/sign-up";
});

Modules.addEventListener("click", function () {
  location.href = "/:room";
});
