document.querySelector(".flex-navbarMenu").classList.add("visibility");
document.querySelector(".helpDesign").classList.add("visibility");

document.querySelector(".Menuimage").addEventListener("click", function () {
  document.querySelector(".flex-navbarMenu").classList.toggle("visibility");
});

document.querySelector(".help").addEventListener("click", function () {
  var name = document
    .querySelector(".helpDesign")
    .classList.toggle("visibility");

  if (name === true) {
    document.querySelector(".help").innerHTML = "?";
  } else {
    document.querySelector(".help").innerHTML = "";
  }
});

document.querySelector(".helpDesign").addEventListener("click", function () {
  document.querySelector(".helpDesign").classList.add("visibility");
  document.querySelector(".help").innerHTML = "?";
});
