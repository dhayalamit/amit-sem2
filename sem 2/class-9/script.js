// document.querySelector(".grandparent").addEventListener("click", () => {
//   console.log("grandparent clicked");
// });
// document.querySelector(".parent").addEventListener("click", (event) => {
//   console.log("parent clicked");
//   event.stopPropagation();
// });
// document.querySelector(".child").addEventListener("click", (event) => {
//   console.log("child clicked");
//   event.stopPropagation();
// });

document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent Clicked!");
}, true);

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent Clicked!");
}, false);

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child Clicked!");
}, false);

