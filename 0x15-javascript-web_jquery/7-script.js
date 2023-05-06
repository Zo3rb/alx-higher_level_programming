$.get(
  "https://swapi-api.alx-tools.com/api/people/5/?format=json",
  function (data, textStatus) {
    if (textStatus == "success") {
      $("DIV#character").text(data.name);
    }
  }
);
