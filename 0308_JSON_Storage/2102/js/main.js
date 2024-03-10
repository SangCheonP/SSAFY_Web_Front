const btnList = document.getElementsByClassName("like-btn");

Array.from(btnList).forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.parentElement.innerText);
  });
});
