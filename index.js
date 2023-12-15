let timebox = document.querySelector(".time-container");
let showDay = document.querySelector(".day");
let showDate = document.querySelector(".date");
let showMonth = document.querySelector(".month");
let showYear = document.querySelector(".year");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dateShow = setInterval(() => {
  let date = new Date();
  let day = days[date.getDay()];
  let date1 = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let hour = date.getHours();
  let mininuts = date.getMinutes();
  let sec = date.getSeconds();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (mininuts < 10) {
    mininuts = `0${mininuts}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  timebox.innerHTML = `${hour}:${mininuts}:${sec}`;
  showDay.innerHTML = day;
  showDate.innerHTML = date1;
  showMonth.innerHTML = month;
  showYear.innerHTML = `,${year}`;
}, 1000);
