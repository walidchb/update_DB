// BUTTONS
const LOGIN = document.getElementById("in_btn");
const USER_NAME = document.getElementById("Name_value");
const PASS_WORD = document.getElementById("mdp_value");
const FORM = document.getElementById("form");
const invalid_h2 = document.querySelector(".wa");
const user = { username: "", password: "" };
const data = [
  { username: "directrice", password: "Directricemdp" },
  { username: "scolarite", password: "Scolaritemdp" },
];
let count = 1;

USER_NAME.addEventListener("change", function () {
  user.username = USER_NAME.value;
});

PASS_WORD.addEventListener("change", function () {
  user.password = PASS_WORD.value;
});

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
});

LOGIN.addEventListener("click", (e) => {
  if (count < 4) {
    if (
      (user.username == data[0].username &&
        user.password == data[0].password) ||
      (user.username == data[1].username && user.password == data[1].password)
    ) {
      location.href = "/new-meeting";
      console.log(1);
    } else {
      console.log(count);

      if (count > 1) {
        invalid_h2.classList.remove("wrong_info");
        invalid_h2.classList.add("invalid");
        setTimeout(function () {
          invalid_h2.classList.remove("invalid");
          invalid_h2.classList.add("wrong_info");
        }, 100);
      } else {
        invalid_h2.classList.remove("invalid");
        invalid_h2.classList.add("wrong_info");
      }
      USER_NAME.value = "";
      PASS_WORD.value = "";
      count += 1;
    }
  } else {
    location.href = "/sign-in";
  }
});
