import "./style.css";

const event = document.querySelector(
  "#event_btn"
);

const dropEvent =
  document.querySelector("#drop_event");

const torsdag =
  document.querySelector("#tors");
const fredag =
  document.querySelector("#fre");
const lordag =
  document.querySelector("#lor");
const torscal = document.querySelector(
  "#tors_cal"
);
const frecal =
  document.querySelector("#fre_cal");
const lorcal =
  document.querySelector("#lor_cal");

event.addEventListener(
  "click",
  lukDrop
);

function lukDrop() {
  dropEvent.classList.remove("hidden");
}

torsdag.addEventListener(
  "click",
  openTors
);

fredag.addEventListener(
  "click",
  openFre
);

lordag.addEventListener(
  "click",
  openLor
);

function openTors() {
  torscal.classList.remove("hidden");
  frecal.classList.add("hidden");
  lorcal.classList.add("hidden");
}

function openFre() {
  torscal.classList.add("hidden");
  frecal.classList.remove("hidden");
  lorcal.classList.add("hidden");
}

function openLor() {
  torscal.classList.add("hidden");
  frecal.classList.add("hidden");
  lorcal.classList.remove("hidden");
}

var countDownDate = new Date(
  "Jan 5, 2023 15:37:25"
).getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
  );
  var minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
      (1000 * 60)
  );
  var seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  // Display the result in the element with id="demo"
  document.getElementById(
    "demo"
  ).innerHTML =
    days +
    "D " +
    hours +
    " T" +
    minutes +
    "M " +
    seconds +
    "S ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById(
      "demo"
    ).innerHTML = "EXPIRED";
  }
}, 1000);
