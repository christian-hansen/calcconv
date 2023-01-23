let data = [
  { name: "years", id: "years" },
  { name: "weeks", id: "weeks" },
  { name: "days", id: "days" },
  { name: "hours", id: "hours" },
  { name: "minutes", id: "minutes" },
  { name: "seconds", id: "seconds" },
];

function renderTime(selection) {
  if (selection === "years") {
    renderByYears();
  }
  if (selection === "weeks") {
    renderByWeeks();
  }
  if (selection === "days") {
    renderByDays();
  }
  if (selection === "hours") {
    renderByHours();
  }
  if (selection === "minutes") {
    renderByMinutes();
  }
  if (selection === "seconds") {
    renderBySeconds();
  }
}

// By years

function renderByYears() {
  let years = document.getElementById("years").value;
  calculateByYears(years);
  renderResults();
}

function calculateByYears(years) {
  data[0].result = +parseFloat(years * 1).toFixed(8); // years
  data[1].result = +parseFloat(years * 52).toFixed(8); // weeks
  data[2].result = +parseFloat(years * 365).toFixed(8); // days
  data[3].result = +parseFloat(years * 365 * 24).toFixed(8); // hours
  data[4].result = +parseFloat(years * 365 * 24 * 60).toFixed(8); // minutes
  data[5].result = +parseFloat(years * 365 * 24 * 60 * 60).toFixed(8); // seconds
}

// By weeks

function renderByWeeks() {
  let weeks = document.getElementById("weeks").value;
  calculateByWeeks(weeks);
  renderResults();
}

function calculateByWeeks(weeks) {
  data[0].result = +parseFloat(weeks / 52).toFixed(8); // years
  data[1].result = +parseFloat(weeks * 1).toFixed(8); // weeks
  data[2].result = +parseFloat(weeks * 7).toFixed(8); // days
  data[3].result = +parseFloat(weeks * 7 * 24).toFixed(8); // hours
  data[4].result = +parseFloat(weeks * 7 * 24 * 60).toFixed(8); // minutes
  data[5].result = +parseFloat(weeks * 7 * 24 * 60 * 60).toFixed(8); // seconds
}

// By days

function renderByDays() {
  let days = document.getElementById("days").value;
  calculateByDays(days);
  renderResults();
}

function calculateByDays(days) {
  data[0].result = +parseFloat(days / 365).toFixed(8); // years
  data[1].result = +parseFloat(days / 7).toFixed(8); // weeks
  data[2].result = +parseFloat(days * 1).toFixed(8); // days
  data[3].result = +parseFloat(days * 24).toFixed(8); // hours
  data[4].result = +parseFloat(days * 24 * 60).toFixed(8); // minutes
  data[5].result = +parseFloat(days * 24 * 60 * 60).toFixed(8); // seconds
}

// By hours

function renderByHours() {
  let hours = document.getElementById("hours").value;
  calculateByHours(hours);
  renderResults();
}

function calculateByHours(hours) {
  data[0].result = +parseFloat(hours / (24 * 365)).toFixed(8); // years
  data[1].result = +parseFloat(hours / (24 * 7)).toFixed(8); // weeks
  data[2].result = +parseFloat(hours / 24).toFixed(8); // days
  data[3].result = +parseFloat(hours * 1).toFixed(8); // hours
  data[4].result = +parseFloat(hours * 60).toFixed(8); // minutes
  data[5].result = +parseFloat(hours * 60 * 60).toFixed(8); // seconds
}

// By minutes

function renderByMinutes() {
  let minutes = document.getElementById("minutes").value;
  calculateByMinutes(minutes);
  renderResults();
}

function calculateByMinutes(minutes) {
  data[0].result = +parseFloat(minutes / (60 * 24 * 365)).toFixed(8); // years
  data[1].result = +parseFloat(minutes / (60 * 24 * 7)).toFixed(8); // weeks
  data[2].result = +parseFloat(minutes / (60 * 24)).toFixed(8); // days
  data[3].result = +parseFloat(minutes / 60).toFixed(8); // hours
  data[4].result = +parseFloat(minutes * 1).toFixed(8); // minutes
  data[5].result = +parseFloat(minutes * 60).toFixed(8); // seconds
}

// By seconds

function renderBySeconds() {
  let seconds = document.getElementById("seconds").value;
  calculateBySeconds(seconds);
  renderResults();
}

function calculateBySeconds(seconds) {
  data[0].result = +parseFloat(seconds / (60 * 60 * 24 * 365)).toFixed(8); // years
  data[1].result = +parseFloat(seconds / (60 * 60 * 24 * 7)).toFixed(8); // weeks
  data[2].result = +parseFloat(seconds / (60 * 60 * 24)).toFixed(8); // days
  data[3].result = +parseFloat(seconds / (60 * 60)).toFixed(8); // hours
  data[4].result = +parseFloat(seconds / 60).toFixed(8); // minutes
  data[5].result = +parseFloat(seconds * 1).toFixed(8); // seconds
}

// General functions

function renderResults() {
  for (let i = 0; i < data.length; i++) {
    let elementName = data[i]["name"];
    let elementID = data[i]["id"];
    let elementResult = data[i]["result"];

    elementName = document.getElementById(elementID);
    elementName.value = elementResult;
  }
}

function resetAll() {
  for (let i = 0; i < data.length; i++) {
    let elementName = data[i]["name"];
    let elementID = data[i]["id"];

    elementName = document.getElementById(elementID);
    elementName.value = "";
  }
}
