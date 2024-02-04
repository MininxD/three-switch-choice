var upBtn = document.getElementById("upImg"),
    images = document.getElementById("images");
    


function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      images.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

upBtn.addEventListener("change", function() {
  changeImage(this);
});