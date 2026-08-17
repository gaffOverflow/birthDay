(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const now = new Date();
  let birthday = new Date(now.getFullYear(), 7, 18, 0, 0, 0);

  if (birthday.getTime() <= now.getTime()) {
    birthday = new Date(now.getFullYear() + 1, 7, 18, 0, 0, 0);
  }

  const countDown = birthday.getTime();

  const x = setInterval(function () {
    const now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % minute) / second
    );

    if (distance < 0) {
      document.getElementById("headline").innerText = "It's your birthday!";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      window.location.href = "hbd.html";
      clearInterval(x);
    }
  }, 1000);
})();
