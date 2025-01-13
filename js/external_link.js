// external link
$(document).ready(function () {
  $(".external-link").click(function (event) {
    event.preventDefault();
    var linkUrl = $(this).attr("href");
    $("#modalLink").attr("href", linkUrl);
    $("#myModal").show();
  });

  $(".close").click(function () {
    $("#myModal").hide();
  });

  $(window).click(function (event) {
    if ($(event.target).is("#myModal")) {
      $("#myModal").hide();
    }
  });
});
