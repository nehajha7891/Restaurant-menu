function filterMenu(category) {
  let items = document.getElementsByClassName("menu-item");

  for (let i = 0; i < items.length; i++) {
    if (category === 'all') {
      items[i].style.display = "block";
    } else {
      if (items[i].classList.contains(category)) {
        items[i].style.display = "block";
      } else {
        items[i].style.display = "none";
      }
    }
  }
}
