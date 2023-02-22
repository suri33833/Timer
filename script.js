function renderTime(time) {
  let day = document.getElementById("days");
  day.textContent = time;
}
function renderEvent(name) {
  document.querySelector(".event>h1").textContent = name;
}
//getting event name and date from user
function submitData() {
  const eventName = document.getElementById("eventName").value;
  const eventDate = document.getElementById("eventDate");
  renderEvent(eventName);
  let str = eventDate.value.split("-");
  const target = new Date(...str);
  const currentTime = new Date();
  let diff = Math.floor((target - currentTime) * 0.001);
  //taking user entered date

  let si = setInterval(timer, 1000);

  function timer() {
    diff--;
    let ss = diff,
      mm,
      hh,
      dd;

    mm = Math.floor(ss / 60);
    hh = Math.floor(mm / 60);
    dd = Math.floor(hh / 24);
    ss = ss % 60;
    mm = mm % 60;
    hh = hh % 24;
    const time = `${dd} : ${hh}: ${mm} : ${ss}`;
    renderTime(time);
    if (!diff) {
      clearInterval(si);
    }
  }
}
