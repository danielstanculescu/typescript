"use strict";
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear.toString());
year.textContent = thisYear.toString();
