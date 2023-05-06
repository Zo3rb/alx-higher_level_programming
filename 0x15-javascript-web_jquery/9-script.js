$(document).ready(function () {
  $.ajax({
    url: "https://fourtonfish.com/hellosalut/?lang=fr",
    method: "GET",
    format: "json",
    dataType: "jsonp",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }).done(function (data) {
    $("DIV#hello").text(data.hello);
  });
});
