document.addEventListener("DOMContentLoaded", function () {
  $("INPUT#btn_translate").click(function () {
    $.ajax({
      url: "https://hellosalut.stefanbohacek.dev/",
      method: "GET",
      dataType: "jsonp",
      data: {
        lang: $("INPUT#language_code").val(),
      },
    }).done(function (data) {
      $("DIV#hello").text(data.hello);
    });
  });
});
