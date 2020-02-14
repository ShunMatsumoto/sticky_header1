$(function () {

  $('.page-header').each(function () {

    var $window = $(window),
        $header = $(this),

        $headerClone = $header.contents().clone(),
        $headerCloneContainer = $('<div class="page-header-clone"></div>'),
        threshold = $header.offset().top + $header.outerHeight();

    $headerCloneContainer.append($headerClone);  //コンテナにヘッダーのクローンを挿入
    $headerCloneContainer.appendTo('body');  //コンテナをbodyの最後に挿入

    $window.on('scroll', function () {
      if ($window.scrollTop() > threshold) {
        $headerCloneContainer.addClass('visible');
      } else {
        $headerCloneContainer.removeClass('visible');
      }
    });
  });
});