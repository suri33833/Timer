//for getting time by user
function renderTime(time) {
  let day = document.getElementById("days");
  day.textContent = time;
}

//for getting event name by user
function renderEvent(name) {
  document.querySelector(".event>h1").textContent = name;
}

//difference time remaning is event coming time
function time() {
  let str = eventDate.value.split("-");
  const target = new Date(str[0], str[1] - 1, str[2]);
  const currentTime = new Date();
  let timeLeft = Math.floor((target - currentTime) * 0.001);
  return timeLeft;
}
let interval = null;
//after submiting
function submitData() {
  clearInterval(interval);
  const eventName = document.getElementById("eventName").value;
  const eventDate = document.getElementById("eventDate");
  let diff = time();
  //setting interval for timer function
  document.querySelector("form").reset();
  interval = setInterval(timer, 1000);

  //timer function which show time left in event
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
    if (diff > 0) {
      renderEvent(eventName);
      const time = `${dd} : ${hh}: ${mm} : ${ss}`;
      renderTime(time);
    } else if (diff <= 0) {
      clearInterval(interval);
    }
  }
}
