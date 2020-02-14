$(function () {

  $('.page-header').each(function () {

    var $window = $(window),
        $header = $(this),

        $headerClone = $header.contents().clone(),
        $headerCloneContainer = $('<div class="page-header-clone"></div>'),
        threshold = $header.offset().top + $header.outerHeight();
  });
});