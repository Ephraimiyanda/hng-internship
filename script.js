const currentDayOfTheWeek= document.querySelector('[data-testid="currentDayOfTheWeek"]')
const currentUTCTime= document.querySelector('[data-testid="currentUTCTime"]')

function updateDateTime() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentMilliseconds = now.getUTCMilliseconds();
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    currentUTCTime.innerHTML = Date.now();
    currentDayOfTheWeek.innerHTML = week[currentDay];
  }
  updateDateTime();
  setInterval(updateDateTime, 100);