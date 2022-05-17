$(document).ready(function () {
  // popup-1
  $("#btn-1-next").click(function () {
    $("#popup-2").show();
    $("#popup-1").hide();
  });

  $("#btn-1-prev").click(function () {
    $("#popup-1").show();
    $("#popup-2").hide();
  });

  $("#btn-2-prev").click(function () {
    $("#popup-1").show();
    $("#popup-2").hide();
  });
});
