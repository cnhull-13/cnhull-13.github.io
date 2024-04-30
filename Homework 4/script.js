let active = false;


function add(a, b) {
  alert(parseInt(a) + parseInt(b));
}

function changeBackground(selection) {
  let body = document.getElementById("body");
  console.log("Selected color: " + selection);
  body.classList.remove("blue-bg", "gold-bg", "white-bg");
  body.classList.add(selection);
}

function updateName(name) {
  localStorage.setItem("name", name);
  document.getElementById("insertName").innerHTML =
    localStorage.getItem("name");
}

function activate() {
  active = true;
}

window.onload = function () {
  console.log("hello??");
  if (localStorage.getItem("name") && localStorage.getItem("name") != "") {
    console.log("setting name");
    console.log(localStorage.getItem("name"));
    document.getElementById("insertName").innerHTML =
      localStorage.getItem("name");
  } else {
    console.log("setting default");
    document.getElementById("insertName").innerHTML = "User";
  }
};


window.onclick = function (event) {
  if (
    active == true &&
    !event.target.matches("userName") &&
    document.getElementById("userName").value != ""
  ) {
    let name = document.getElementById("userName").value;
    localStorage.setItem("name", name);
    document.getElementById("insertName").innerHTML =
      localStorage.getItem("name");
  }
};
