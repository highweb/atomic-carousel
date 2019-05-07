//=include owl.carousel/dist/owl.carousel.min.js

function initCarousel($, context) {
  var defaults = {
    items: 1,
    nav: true,
    navText: ['‹', '›'],
    navElement: 'span' // @TODO: Switch to 'button' once better supported.
  };

  $(context).find('[data-carousel]').each(function() {
    var $this = $(this);
    var options = $.extend(defaults, $this.data('carousel'));

    var owl = $this.owlCarousel(options);

    if (options.mousewheel) {
      owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
          owl.trigger('next.owl');
        } else {
          owl.trigger('prev.owl');
        }
        e.preventDefault();
      });
    }
  });

  $(document).on('click', '.owl-item', function() {
    var $this = $(this);
    var $owl = $this.closest('.owl-carousel');
    var owl = $owl.data('owl.carousel');

    $owl.trigger('to.owl.carousel', owl.relative($this.index()));
  });
}
