$(function() {
  if ($('#HTML4').length) {
    var el = $('#HTML4');
    var stickyTop = $('#HTML4').offset().top;
    var stickyHeight = $('#HTML4').height();
    $(window).scroll(function() {
      var limit = $('#footer-wrapper').offset().top - stickyHeight - 40; // Jarak berhenti di "#footer-wrapper"
      var windowTop = $(window).scrollTop();
      if (stickyTop < windowTop) {
        el.css({
          position: 'fixed',
          top: 40
        });
      } else {
        el.css('position', 'static');
      }
      if (limit < windowTop) {
        var diff = limit - windowTop;
        el.css({
          top: diff
        });
      }
    });
  }
});
