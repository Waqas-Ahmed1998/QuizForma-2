$(document).ready(function () {
  // popup-1
  $("#btn-1-next").click(function () {
    $("#popup-2").show();
    $("#popup-1").hide();
  });

  // btn number shows the popup number

  $("#btn-2-prev").click(function () {
    $("#popup-1").show();
    $("#popup-2").hide();
  });

  $("#btn-2-next").click(function () {
    $("#popup-1").hide();
    $("#popup-2").hide();
    $("#popup-3").show();
  });

  $("#btn-3-prev").click(function () {
    $("#popup-1").hide();
    $("#popup-2").show();
    $("#popup-3").hide();
  });

  $("#btn-3-next").click(function () {
    $("#popup-1").hide();
    $("#popup-2").hide();
    $("#popup-3").hide();
    $("#popup-4").show();
  });

  $("#btn-4-prev").click(function () {
    $("#popup-1").hide();
    $("#popup-2").hide();
    $("#popup-3").show();
    $("#popup-4").hide();
  });

  $("#btn-4-next").click(function () {
    $("#popup-1").hide();
    $("#popup-2").hide();
    $("#popup-3").hide();
    $("#popup-4").hide();
    $("#popup-5").show();
  });

  $("#btn-5-prev").click(function () {
    $("#popup-1").hide();
    $("#popup-2").hide();
    $("#popup-3").hide();
    $("#popup-4").show();
    $("#popup-5").hide();
  });

  $("#btn-5-next").click(function () {
    $("#popup-1").hide();
    $("#popup-2").hide();
    $("#popup-3").hide();
    $("#popup-4").hide();
    $("#popup-5").hide();
    $("#popup-6").show();
  });

  $("#btn-6-prev").click(function () {
    $("#popup-1").hide();
    $("#popup-2").hide();
    $("#popup-3").hide();
    $("#popup-4").hide();
    $("#popup-5").show();
    $("#popup-6").hide();
  });
});
