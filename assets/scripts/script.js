// Importing json file with the data for our stats ...
import statsJson from "./data/data.json" assert { "type": "json" };

// Declaring variables for storing our stat-info elements ...
const statNames = document.querySelectorAll(".stat-name");
const statPoints = document.querySelectorAll(".stat-point-of");
const statIcons = document.querySelectorAll(".stat-icon");

// Updating stat-info according to the data from the json file ...
for (let i = 0; i < statsJson.length; i++) {
  statNames[i].textContent = statsJson[i].category;
  statPoints[i].textContent = String(statsJson[i].score);
  statIcons[i].setAttribute("src", statsJson[i].icon);
}
