$(function() {
  $(".js-show-article-logs").on("click touchend", function() {
    $(".js-article-logs").show();
    $(".js-show-article-logs").addClass("activated");
  });

  $(".js-header-archive-link").on("click touchend", function() {
    $(".js-article-logs").show();
    $(".js-show-article-logs").addClass("activated");
    window.location.hash = "archive";
  });
});
