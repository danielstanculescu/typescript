const year = document.getElementById("year") as HTMLSpanElement
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear.toString())
year.textContent = thisYear.toString()
