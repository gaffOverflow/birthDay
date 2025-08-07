(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const now = new Date();
  const birthday = new Date(now.getTime() + 30 * 60 * 1000).getTime(); // 30 minutes from now

  const countDown = birthday;

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
  }, 0);
})();
