$('#hamburger').click(function() {
    $('.hamburger').toggleClass('open');
    $('.menu').toggleClass('open');
});

var navActive = function(section) {

    var $el = $('#navbar > ul');
    $el.find('li').removeClass('active');
    $el.each(function(){
        $(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
    });

};

var navigationSection = function() {

    var $section = $('section[data-section]');
    
    $section.waypoint(function(direction) {
          
          if (direction === 'down') {
            navActive($(this.element).data('section'));
          }
    }, {
          offset: '150px'
    });

    $section.waypoint(function(direction) {
          if (direction === 'up') {
            navActive($(this.element).data('section'));
          }
    }, {
          offset: function() { return -$(this.element).height() + 155; }
    });

};