const button = document.querySelector("button");
const SideBar = document.querySelector(".Sidebar");

button.onclick = () => {
  SideBar.classList.toggle("show");
  button.classList.toggle("open");
};
