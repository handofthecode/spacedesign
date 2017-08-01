$(function() {

  $('.team').click(function(e) {
    var $link = $(e.target).closest('a')
    var scrollTop = $(window).scrollTop();

    if ($link.hasClass('profile')) {
      e.preventDefault();
      $('#tint').fadeIn(400);

      var $modal = $('#' + $link.attr('target-modal'));
      $modal.slideDown().css({top: scrollTop + 40});

    } else if ($link.hasClass('close') || $(e.target).is($('#tint'))) {
      e.preventDefault();
      $('.modal').filter(':visible').slideUp();
      $('#tint').fadeOut(400);
    }

  });

  $(document).keyup(function(e) {
     if ($('.modal').filter(':visible').length > 0 && e.key === 'Escape') {
       $('.close').trigger('click');
     }
  });
  
});