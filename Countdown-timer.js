const startDate = "30 June 2022";
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function countdown() {
  const vacationStartDate = new Date(startDate);
  const now = new Date();
  const totalSeconds = (vacationStartDate - now) / 1000;
  const s_econds = Math.floor(totalSeconds) % 60;
  const m_inutes = Math.floor(totalSeconds / 60) % 60;
  const h_ours = Math.floor(totalSeconds / 3600) % 24;
  const d_ays = Math.floor(totalSeconds / 86400);

  days.innerHTML = timeFormat(d_ays);
  hours.innerHTML = timeFormat(h_ours);
  minutes.innerHTML = timeFormat(m_inutes);
  seconds.innerHTML = timeFormat(s_econds);
};

countdown();

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
