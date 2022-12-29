const countriesURL = "https://corona.lmao.ninja/v3/covid-19/countries";
const worldURL = "https://corona.lmao.ninja/v3/covid-19/all";
const data = JSON.parse(localStorage.getItem("data"));
let currentSortedState = localStorage.getItem("sorted_by");
let array = ["cases", "deaths", "active", "recovered", "critical"];

main();
function main() {
  $.get(countriesURL, function (countryData) {
    localStorage.setItem("data", JSON.stringify(countryData));
    sort("cases");
  });
}

function checkCountry(country) {
  $.get(countriesURL + "/" + country, function (countryData) {
    localStorage.removeItem("countryData", JSON.stringify(countryData));
    localStorage.setItem("countryData", JSON.stringify(countryData));
    window.location = "html/charts.html";
  });
}

function sort(id) {
  localStorage.setItem("sorted_by", JSON.stringify(id));
  sortBy(id, data.length, data);
  for (let j = 0; j < array.length; j++) {
    document.getElementById(array[j]).classList.add("sortButton");
  }
  document.getElementById(id).classList.add("inactive");
  for (let i in array) {
    if (id != array[i]) {
      document.getElementById(array[i]).classList.remove("inactive");
    }
  }
}
function displayHeaderTable() {
  getWorldData();

  const headerTable = `<tr class='sub-table'>
                <th>NAME</th>
                <th>CASES<br/><i id='cases' onclick='sort(this.id)'  class='fas fa-sort inactive' style='margin-left:5px;cursor:pointer;text-decoration:none;'></i></th>              
                <th>DEATHS<br/><i id='deaths'  onclick='sort(this.id)'  class='fas fa-sort' style='margin-left:5px;cursor:pointer;text-decoration:none;'></i></button></th>
                <th>RECOVERED<br/><i id='recovered'  onclick='sort(this.id)'  class='fas fa-sort' style='margin-left:5px;cursor:pointer;text-decoration:none;'></i></th>
                <th>CRITICAL<br/><i id='critical'  onclick='sort(this.id)'  class='fas fa-sort' style='margin-left:5px;cursor:pointer;text-decoration:none;'></i></th>
                <th>ACTIVE<br/><i id='active'  onclick='sort(this.id)'  class='fas fa-sort' style='margin-left:5px;cursor:pointer;text-decoration:none;'></i></th>
              </tr>
              <tr id='worldData'></tr>`;
  document.getElementById("table").innerHTML += headerTable;
}
function displayData(numberOfCountries, countryData) {
  displayHeaderTable();
  for (let i = 0; i < numberOfCountries; i++) {
    let countryDataSetup =
      "<tr id='underTable' class='rowColorChange'><td class='countryButton' style='text-align:left;'>" +
      countryData[i].country +
      "<i onclick='checkCountry(this.parentElement.innerText)' class='fa-solid fa-chart-column info' style='float:right'></i></td><td style='color:rgb(0, 100, 200)'>" +
      numberWithCommas(countryData[i].cases) +
      "</td><td style='color:red'>" +
      numberWithCommas(countryData[i].deaths) +
      "</td><td style='color:green;'>" +
      numberWithCommas(countryData[i].recovered) +
      "</td><td style='color:orange;'>" +
      numberWithCommas(countryData[i].critical) +
      "</td><td style='color:#fada5e;'>" +
      numberWithCommas(countryData[i].active) +
      "</td></tr>";
    document.getElementById("table").innerHTML += countryDataSetup;
  }
}

function getWorldData() {
  $.get(worldURL, function (worldData) {
    let updatedAgo = getTimeDifference(new Date(), new Date(worldData.updated));
    let cases = numberWithCommas(worldData.cases);
    let deaths = numberWithCommas(worldData.deaths);
    let recovered = numberWithCommas(worldData.recovered);
    let critical = numberWithCommas(worldData.critical);
    let active = numberWithCommas(worldData.active);
    let tests = numberWithCommas(worldData.tests);
    document.getElementById("lastRefresh").innerHTML =
      "Updated " + updatedAgo + " ago";
    document.getElementById("worldData").innerHTML +=
      "<td style='text-align:left;'> WORLD<i onclick='getWorldChart()' class='fa-solid fa-chart-column info' style='float:right'></i> </td><td style='color:rgb(0, 100, 200)'>" +
      cases +
      "</td><td style='color:red'>" +
      deaths +
      "</td><td style='color:green;'>" +
      recovered +
      "</td><td style='color:orange;'>" +
      critical +
      "</td><td style='color:#fada5e;'>" +
      active +
      "</td>";
    document.getElementById("totalCases").innerText = cases;
    document.getElementById("totalDeaths").innerText = deaths;
    document.getElementById("totalRecovered").innerText = recovered;
    document.getElementById("totalCritical").innerText = critical;
    document.getElementById("totalActive").innerText = active;
    document.getElementById("totalTests").innerText = tests;
  });
}

function getWorldChart() {
  goToCharts();
  window.location = "html/charts.html";
}

function sortBy(id, numberOfCountries, countryData) {
  for (let i = 0; i <= numberOfCountries; i++) {
    for (let j = 1; j <= numberOfCountries - 1; j++) {
      if (countryData[j][id] > countryData[j - 1][id]) {
        let tmp = countryData[j - 1];
        countryData[j - 1] = countryData[j];
        countryData[j] = tmp;
      }
    }
  }
  document.getElementById("table").innerHTML = " ";
  displayData(numberOfCountries, countryData);
}

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function randomIntFromInterval(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.round(value / 1000) * 1000;
}

function getTimeDifference(dateFuture, dateNow) {
  let difference = "";
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;

  if (days > 0) {
    difference += days === 1 ? `${days} day, ` : `${days} days, `;
  }
  difference +=
    minutes === 0 || hours === 1 ? `${minutes} minutes` : `${minutes} minutes`;

  return difference;
}
