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

//animation

const { styler, spring, listen, pointer, value } = window.popmotion;

//same as: const styler = window.popmotion.styler; --> and for all of the above

const ball = document.querySelector('button');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });