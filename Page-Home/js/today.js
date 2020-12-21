$("#progressbar").progressbar({
  max: 100,
  change: function() {
    $("#progressbarNum").text($(this).progressbar('value'))
  }
});
var timer = setInterval(function() {
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  var MaxSecond = 86400;
  var NowSecond = hour * 60 * 60 + min * 60 + sec;
  var Percentage = Math.floor(((NowSecond / MaxSecond) * 100) * 100) / 100;
  $("#progressbar").progressbar("value", Percentage);
  if (Percentage > 100) clearInterval(timer);
}, 10);
