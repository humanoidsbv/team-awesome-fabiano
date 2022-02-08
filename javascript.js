const toggleButton = document.querySelector('.togglebutton');
const menu = document.querySelector('.collapsible-menu');

toggleButton.addEventListener('click', () => {

    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });

