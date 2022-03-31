$(document).ready(function() {
  $(".card").click(function(event) {
    $(this).find("div").toggle();
  });
});