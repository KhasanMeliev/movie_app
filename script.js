const search = document.getElementById("searchBox"),
  images = document.querySelectorAll(".box");

search.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let searcValue = search.value;
    let value = searcValue.toLowerCase();
    images.forEach((image) => {
      if (value == image.dataset.name) {
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
  }
});

search.addEventListener("keyup", () => {
  if (search.value != "") {
    return;
  }

  images.forEach((image) => {
    image.style.display = "block";
  });
});
