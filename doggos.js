const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");
const loadingGif = document.querySelector("#loading-gif");

loadingGif.style.visibility = "hidden";

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      loadingGif.style.visibility = "visible";
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      loadingGif.style.visibility = "hidden";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);

console.log("this will log first");
