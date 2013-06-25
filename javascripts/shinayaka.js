$(function() {
  $(".js-show-article-logs").click(function() {
    $(".js-article-logs").show();
    $(".js-show-article-logs").addClass("activated");
  });

  $(".js-header-archive-link").click(function() {
    $(".js-article-logs").show();
    $(".js-show-article-logs").addClass("activated");
    window.location.hash = "archive";
  });
});