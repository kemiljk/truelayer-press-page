$(function () {
  $(".article-card-container").slice(0, 5).show();
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
    $(".article-card-container:hidden").slice(0, 5).slideDown();
    if ($(".article-card-container:hidden").length == 0) {
      $("#loadMore").fadeOut('slow');
    }
  });
});