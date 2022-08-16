const clockTitle = document.querySelector(".js-clock");
/*
function getClock() {
    const today = new Date();
    const christmas = new Date("December 25, 2022, 0:00:00");
    const dDay = christmas.getTime() - today.getTime();
    const day = Math.floor(dDay / (24 * 60 * 60 * 1000));
    const hours = String(
      Math.floor((dDay % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
    ).padStart("2", 0);
    const minutes = String(
      Math.floor((dDay % (60 * 60 * 1000)) / (60 * 1000))
    ).padStart("2", 0);
    const seconds = String(Math.floor((dDay % (60 * 1000)) / 1000)).padStart(
      "2",
      0
    );
  
    clockTitle.innerText = `${day}D ${hours}h ${minutes}m ${seconds}s`;
  }
  
  getClock();
  setInterval(getClock, 1000);*/

function getTimer() {
    const today = new Date();
    const chirstmasDay = new Date("December 25, 2022, 0:00:00");
    const dDay = chirstmasDay.getTime() - today.getTime();
    const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
    const hours = String(
        Math.floor(dDay % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    ).padStart("2", 0);

    const minutes = String(
    Math.floor(dDay % (1000 * 60 * 60) / (1000 * 60))
    ).padStart("2", 0);

    const seconds = String(
        Math.floor(dDay % (1000 * 60)/1000)
    ).padStart("2", 0);

    clockTitle.innerText = `${day}일 : ${hours}시간 : ${minutes}분 : ${seconds}초가 남았습니다.`;

}

getTimer();
setInterval(getTimer, 1000);
