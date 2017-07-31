$(function() {

  $('document').click(function(e) {
    var $link = $(e.target).closest('a')
    var scrollTop = $(window).scrollTop();

    if ($link.hasClass('profile')) {
      e.preventDefault();
      $('#tint').fadeIn(400);

      switch(true) {
        case $link.hasClass('kevin'):
          $('.modal.kevin').slideDown().css({top: scrollTop + 40});
          break;
        case $link.hasClass('louis'):
          $('.modal.louis').slideDown().css({top: scrollTop + 40});
          break;
        case $link.hasClass('kasper'):
          $('.modal.kasper').slideDown().css({top: scrollTop + 40});
          break;
        case $link.hasClass('chris'):
          $('.modal.chris').slideDown().css({top: scrollTop + 40});
          break;
      }

    } else if ($link.hasClass('close') || $(e.target).is($('#tint'))) {
      e.preventDefault();
      $('.modal').filter(':visible').slideUp();
      $('#tint').fadeOut(400);
    }

  });

  $(document).keyup(function(e) {
     if ($('.modal').filter(':visible').length > 0 && e.key === 'Escape') {
       $('.modal').filter(':visible').slideUp();
       $('#tint').fadeOut(400);
     }

  })
});