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
  $("INPUT#language_code").on("keypress", function (e) {
    if (e.which === 13) {
      $.ajax({
        url: "https://hellosalut.stefanbohacek.dev/",
        method: "GET",
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
        },
        data: {
          lang: $("INPUT#language_code").val(),
        },
      }).done(function (data) {
        $("DIV#hello").text(data.hello);
      });
    }
  });
});
