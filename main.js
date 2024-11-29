let uploadedPhoto = document.getElementById("uploaded-photo");
let encryptedPhoto = document.getElementById("encrypted-photo");
let imageUpload = document.getElementById("image-upload");
let encryptDiv = document.querySelector(".encrypt-div");
let encryptKey = document.querySelector(".encrypt-key");
let encryptButton = document.querySelector(".encrypt-button");
let encryptedDiv = document.querySelector(".encrypted");

encryptedDiv.style.display = "none";
encryptDiv.style.display = "none";

let imgUrl = "";
imageUpload.onchange = function () {
  imgUrl = URL.createObjectURL(this.files[0]);
  uploadedPhoto.src = imgUrl;
  encryptDiv.style.display = "";
  encryptedPhoto.src = imgUrl;
};

encryptButton.onclick = function () {
  let key = encryptKey.value;
  if (key.length === 0) {
    alert("Please enter a valid encryption key.");
  } else {
    encryptedDiv.style.display = "";
  }
};
