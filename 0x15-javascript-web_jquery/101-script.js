document.addEventListener("DOMContentLoaded", function () {
  var add = $("DIV#add_item");
  var del = $("DIV#remove_item");
  var clr = $("DIV#clear_list");

  add.click(function () {
    $("UL.my_list").append("<li>Item</li>");
  });

  del.click(function () {
    $("UL.my_list li:last-of-type").remove();
  });

  clr.click(function () {
    $("UL.my_list").empty();
  });
});
