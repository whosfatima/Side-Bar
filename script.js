const button = document.querySelector("button");
const SideBar = document.querySelector(".Sidebar");

button.onclick = () => {
  SideBar.classList.toggle("show");
  if(button.classList.contains('open')){
    button.classList.remove('open')
    button.classList.add('close')
  } else{
    button.classList.remove('close')
    button.classList.add('open')
  }
};
